import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--purple-900);

  .load {
    width: 10%;

    display: block;
    position: fixed;
    top: calc(50% - (112px / 2));
    left: calc(50% - (112px / 2));

    -webkit-animation: 2s spin infinite linear;
    animation: 2s spin infinite linear;

    &.hide {
      display: none;
    }
  }

  .rankTotal {
    position: relative;

    .link-total-page {
      display: inline-block;
      position: absolute;
      right: 0;
    }

    h1 {
      padding: 2rem;
      display: block;

      text-align: center;
      font-size: 1.5rem;
    }

    .rankTotalBox {
      display: flex;

      & div:nth-child(1) {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & span:nth-child(1) {
          font-size: .8rem;
        }

        span:nth-child(2) {
          font-size: 4.2rem;
        }
      }

      & div:nth-child(2) {
        max-width: 100px;
      }
    }
  }
`;
