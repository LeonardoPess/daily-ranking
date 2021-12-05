import { Link } from 'react-router-dom';

import { Container } from './styles';

import loader from '../../assets/loader-2-line.svg';
import poison from '../../assets/poison.png';
import arrowGoBack from '../../assets/arrow-go-back-line.svg';

interface Player {
  name: string;
  score: number;
  total: number;
  rank: number;
}

interface DailyTotalProps {
  players: Player[];
  updatedAt: string;
  isLoading: boolean;
  SLPCurrentBRLCurrency: string;
}

export function DailyTotal({players, updatedAt, isLoading, SLPCurrentBRLCurrency}: DailyTotalProps) {
  function sumAllScores() {
    return players.reduce((a: number, {score}) => a + Number(score), 0);
  }

  return (
    <Container>
      {(isLoading) ? (
          <img className="load" src={loader} alt="Loading" />
        ) : (
          <section className="rankTotal">
            <h1>Total Diário <Link to="/" className="link-total-page"><img src={arrowGoBack} alt="Voltar" /></Link></h1>
            <div className="rankTotalBox">
              <div>
                <span>{updatedAt}</span>
                <span>{sumAllScores()}</span>
              </div>
              <div>
                <img src={poison} alt="Poison" />
              </div>
            </div>
            <span>{SLPCurrentBRLCurrency}</span>
          </section>
        )}
    </Container>
  );
}