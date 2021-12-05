import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Rank } from './components/Rank';
import { DailyTotal } from './components/DailyTotal';
import { AdminViewer } from './components/AdminViewer';
import { api } from './services/api';

import { GlobalStyle } from './styles/global';

interface player {
  name: string;
  score: number;
  total: number;
  rank: number;
}

export function App() {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isAdminViewer, setIsAdminViewer ] = useState<boolean>(false);
  const [ players, setPlayers ] = useState<player[]>([]);
  const [ updatedAt, setUpdatedAt ] = useState<string>('');
  const [ SLPCurrentBRLCurrency, setSLPCurrentBRLCurrency ] =  useState<string>('R$0.00000');

  useEffect(() => {
    async function getRankInfos() {
      try {
        const responseRank = await api.get('rank.php');
        setPlayers(responseRank.data.players);
        setUpdatedAt(responseRank.data.updatedAt);
        const adminLocalStorage = JSON.parse(localStorage.getItem('daily.ranking:admin') || '');
        (adminLocalStorage) && setIsAdminViewer(adminLocalStorage.isAdminViewer);

        const responseSLP = await api.get('smooth-love-potion.php');
        const { SLPBRLCurrency } = responseSLP.data;
        setSLPCurrentBRLCurrency(`R$${SLPBRLCurrency}`);
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false);
        setTimeout( getRankInfos, 5000);
      }
    }

    getRankInfos();
  }, []);

  function activeAdminViewer() {
    setIsAdminViewer(true);
  }

  return (
    <>
      <Router basename="/">
        <Routes>

          <Route path="/" element={
            <Rank players={players} updatedAt={updatedAt} isLoading={isLoading} isAdminViewer={isAdminViewer} SLPCurrentBRLCurrency={SLPCurrentBRLCurrency} />}>
          </Route>

          <Route path="/total-diario" element={
            <DailyTotal players={players} updatedAt={updatedAt} isLoading={isLoading} SLPCurrentBRLCurrency={SLPCurrentBRLCurrency} />}>
          </Route>

          <Route path="/admin-viewer" element={
            <AdminViewer activeAdminViewer={activeAdminViewer} />}>
          </Route>

        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
