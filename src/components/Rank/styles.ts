import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  min-width: 650px;

  padding: 2rem 2rem;

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

  & > .container {
    max-width: 800px;

    position: relative;
    margin: 0 auto;

    &.hide {
      display: none;
    }

    .date {
      position: absolute;
      top: -2rem;
      left: 0;
  
      font-size: .8rem;
    }
  }

  table {
    td {
      min-height: 100px;

      font-size: 1.5rem;

      .score-wrapper {
        max-width: 90px;
      }

      &:last-child {
        font-size: 1rem;

        span {
          width: 100%;
          display: flex;
          font-weight: bold;
        }
      }
    }

    .conventions {
      padding:1rem;
      position: relative;

      text-align: center;
      font-size: .6rem;
      background: white;

      .thirty-percent {
        position: absolute;
        top: -1rem;
        left: 0%;
        transform: translateX(-50%);

        &::after {
          bottom: -4px;
        }
      }

      .thirtyfive-percent,
      .thirtyfive-value {
        position: absolute;
        left: 67.3076923076923%;
        transform: translateX(-50%);
      }

      .thirtyfive-percent {
        top: -1rem;

        &::after {
          bottom: -4px;
        }
      }

      .thirtyfive-value {
        bottom: -1rem;

        &::after {
          top: -4px;
        }
      }

      .forty-percent,
      .forty-value {
        position: absolute;
        left: 86.53846153846153%;
        transform: translateX(-50%);
      }

      .forty-percent {
        top: -1rem;

        &::after {
          bottom: -4px;
        }
      }

      .forty-value {
        bottom: -1rem;

        &::after {
          top: -4px;
        }
      }

      .forty-percent,
      .forty-value, 
      .thirtyfive-percent,
      .thirtyfive-value,
      .thirty-percent {
        &::after {
          content: '';
          width: 3px;
          height: 3px;

          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 99;

          border-radius: 50%;
          background-color: var(--red-500);
        }
      }

      .current-value {
        height: 100%;
        width: 0;

        padding-right: .2rem;
        display: flex;
        align-items: center;
        justify-content: right;
        position: absolute;
        top: 0;
        left: 0;

        font-size: 1rem;
        color: white;
        font-weight: bold;
        background: var(--green-500);
      }
    }
  }
`;
