import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Rank } from './components/Rank';
import { DailyTotal } from './components/DailyTotal';
import { api } from './services/api';

import { GlobalStyle } from './styles/global';

interface player {
  name: string;
  score: number;
  total: number;
  rank: number;
}

export function App() {
  const [ players, setPlayers ] = useState<player[]>([]);
  const [ updatedAt, setUpdatedAt ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    async function updateRankInfos() {
      try {
        const response = await api.get('rank.php');
        setPlayers(response.data.players);
        setUpdatedAt(response.data.updatedAt);
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false);
        setTimeout( updateRankInfos, 5000);
      }
    }
  
    updateRankInfos();
  }, []);

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Rank players={players} updatedAt={updatedAt} isLoading={isLoading} />}></Route>
          <Route path="/total-diario" element={<DailyTotal players={players} updatedAt={updatedAt} isLoading={isLoading} />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
