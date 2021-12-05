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

interface TotalProps {
  players: Player[];
  updatedAt: string;
  isLoading: boolean;
}

export function Total({players, updatedAt, isLoading}: TotalProps) {
  function getTotalScore() {
    let newTotal = 0;
    players.map((player) => newTotal += Number(player.score));
    return newTotal;
  }

  return (
    <Container>
      {(isLoading) ? (
          <img className="load" src={loader} alt="Loading" />
        ) : (
          <section className="rankTotal">
            <Link to="/" className="link-total-page"><img src={arrowGoBack} alt="Voltar" /></Link>
            <h1>Total Diário</h1>

            <div className="rankTotalBox">
              <div>
                <span>{updatedAt}</span>
                <span>{getTotalScore()}</span>
              </div>
              <div>
                <img src={poison} alt="Poison" />
              </div>
            </div>
          </section>
        )}
    </Container>
  );
}