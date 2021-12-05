import { Link } from 'react-router-dom';

import { Container } from './styles';

import crown from '../../assets/crown.png';
import poison from '../../assets/poison.png';
import trophy from '../../assets/trophy.png';
import loader from '../../assets/loader-2-line.svg';

interface Player {
  name: string;
  score: number;
  total: number;
  rank: number;
}

interface RankProps {
  players: Player[];
  updatedAt: string;
  isLoading: boolean;
}

export function Rank({players, updatedAt, isLoading}: RankProps) {
  const playersByDailyScore = [...players].sort((a, b) => b.score - a.score);

  return (
    <Container>
      {(isLoading) ? (
        <img className="load" src={loader} alt="Loading" />
      ) : (
        <div className="container" data-table="wrapper">
          <span className="date">{updatedAt}</span>
          <Link to="/total" className="link-total-page">Total</Link>
          <table  cellSpacing="0">
            <thead>
              <tr>
                <th></th>
                <th>Diário</th>
                <th>Total / Comissão</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {playersByDailyScore.map((player, index) => (
                <tr key={index}>
                  <td><span>{(index === 0) && <img src={crown} alt="Crown" />} {index + 1}# {player.name} : </span></td>
                  <td>
                    {(player.score < 100) ?
                      <span className="red-color flex-align-center score-wrapper">{player.score} <img src={poison} alt="Poison" /></span> :
                      <span className="green-color flex-align-center score-wrapper">${player.score} <img src={poison} alt="Poison" /></span>
                    }
                  </td>
                  <td>
                    <div className="conventions">
                      <span className="thirty-percent">30%</span>
                      <span className="thirtyfive-percent">35%</span>
                      <span className="forty-percent">40%</span>
                      <span className="thirtyfive-value">1750</span>
                      <span className="forty-value">2250</span>
                      <div className="current-value" style={{width: (player.total * 100) / 2600}}>{player.total}</div>
                    </div>
                  </td>
                  <td>
                    {(player.rank < 800) ?
                      <span className="red-color">{player.rank} <img src={trophy} alt="Trophy" /></span> :
                      <span className="green-color">{player.rank} <img src={trophy} alt="Trophy" /></span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
}