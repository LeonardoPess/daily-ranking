import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = '';

    this.get('/rank', () => {
      return [
        {
          "players": [
            {
              "name": "WEMERSON2🐤",
              "score": "3",
              "total": "852",
              "rank": "1118"
            },
            {
              "name": "WEMERSON🐟",
              "score": "52",
              "total": "982",
              "rank": "1502"
            },
            {
              "name": "NATAN🐤",
              "score": "0",
              "total": "1817",
              "rank": "1408"
            },
            {
              "name": "MAICKOL2🐤",
              "score": "11",
              "total": "33",
              "rank": "1109"
            },
            {
              "name": "MAICKOL🐟",
              "score": "0",
              "total": "937",
              "rank": "1172"
            },
            {
              "name": "LUIS🐤",
              "score": "0",
              "total": "1207",
              "rank": "999"
            },
            {
              "name": "JUNIOR🐤",
              "score": "69",
              "total": "822",
              "rank": "1273"
            },
            {
              "name": "JOÃO🐟",
              "score": "0",
              "total": "1458",
              "rank": "1325"
            },
            {
              "name": "ELIANA2🐤",
              "score": "0",
              "total": "1396",
              "rank": "1123"
            },
            {
              "name": "ELIANA🐟",
              "score": "0",
              "total": "1830",
              "rank": "1413"
            },
            {
              "name": "ANYER🐟",
              "score": "0",
              "total": "592",
              "rank": "1058"
            }
          ],
          "updatedAt": "05-12-2021 / 04:27:49"
        }
      ]
    })
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
