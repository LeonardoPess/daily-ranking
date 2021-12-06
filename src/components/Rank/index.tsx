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
  isAdminViewer: boolean;
  SLPCurrentBRLCurrency: string;
}

export function Rank({players, updatedAt, isLoading, isAdminViewer, SLPCurrentBRLCurrency}: RankProps) {
  const playersByDailyScore = [...players].sort((a, b) => b.score - a.score);

  function sumAllScores() {
    return players.reduce((a: number, {score}) => a + Number(score), 0);
  }

  function getSLPByRank(rank: number) {
    if(rank < 800) return 0;
    if(rank >= 800 && rank < 1000) return 1;
    if(rank >= 1000 && rank < 1100) return 3;
    if(rank >= 1100 && rank < 1300) return 6;
    if(rank >= 1300 && rank < 1500) return 9;
    if(rank >= 1500 && rank < 1800) return 12;
    if(rank >= 1800 && rank < 2000) return 15;
    if(rank >= 2000 && rank < 2200) return 18;
    if(rank >= 2200 && rank < 7000) return 21;
  }

  return (
    <Container>
      {(isLoading) ? (
        <img className="load" src={loader} alt="Loading" />
      ) : (
        <div className="container" data-table="wrapper">
          <span className="date">{updatedAt}</span>
          {(isAdminViewer) && <Link to="/total-diario" className="link-total-page">
            Total ({sumAllScores()}) <br /> {SLPCurrentBRLCurrency}
          </Link>}
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
                      <span className="green-color flex-align-center score-wrapper">{player.score} <img src={poison} alt="Poison" /></span>
                    }
                  </td>
                  <td>
                    <div className="conventions">
                      <span className="thirty-percent">30%</span>
                      <span className="thirtyfive-percent">35%</span>
                      <span className="forty-percent">40%</span>
                      <span className="thirtyfive-value">1750</span>
                      <span className="forty-value">2250</span>
                      <div className="current-value" style={{width: `${(player.total * 100) / 2600}%`}}>{player.total}</div>
                    </div>
                  </td>
                    {(player.rank < 800) ? (
                      <td className="rank-column">
                        <span><strong className="red-color">{player.rank}</strong>{getSLPByRank(player.rank)} SLP</span> 
                        <img src={trophy} alt="Trophy" />
                      </td>
                      ) : (
                        <td className="rank-column">
                          <span><strong className="green-color">{player.rank}</strong>{getSLPByRank(player.rank)} SLP</span>
                          <img src={trophy} alt="Trophy" />
                        </td>
                      )
                    }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
}