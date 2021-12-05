import { Container } from './styles';

import loader from '../../assets/loader-2-line.svg';
import crown from '../../assets/crown.png';
import poison from '../../assets/poison.png';
import trophy from '../../assets/trophy.png';

export function Rank() {
  return (
    <Container className="rank">
      <img className="load" src={loader} alt="Loading" data-loading/>

      <div className="container hide" data-table="wrapper">
        <span className="date" data-dynamically="updatedAtBox">01-12-2021 / 14:29:53</span>
        <table  cellSpacing="0">
          <thead>
            <tr>
              <th></th>
              <th>Diário</th>
              <th>Total / Comissão</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody data-dynamically="tableBodyBox"></tbody>
        </table>
      </div>
    </Container>
  );
}