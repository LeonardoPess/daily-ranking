import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Rank } from './components/Rank';
import { Total } from './components/Total';
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
    api.get('rank')
      .then((response) => {
        setPlayers(response.data[0].players);
        setUpdatedAt(response.data[0].updatedAt);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Rank players={players} updatedAt={updatedAt} isLoading={isLoading} />}></Route>
          <Route path="/total" element={<Total players={players} updatedAt={updatedAt} isLoading={isLoading} />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
