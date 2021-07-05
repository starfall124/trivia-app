import styled from 'styled-components'

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .main {
    &__header {
      padding: 1em 2em;
      display: flex;
      justify-content: center;
      text-align: center;

      @media only screen and (max-width: 425px) {
        padding: 1em 1em;
      }
    }

    &__body {
      padding: 1em 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      &--results {
        text-align: left;
        align-items: none;
      }

      @media only screen and (max-width: 425px) {
        padding: 1em 1em;
      }
    }

    &__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em 2em;

      button {
        &:nth-child(2) {
          margin-left: 2em;
        }
      }

      @media only screen and (max-width: 425px) {
        padding: 1em 1em;
      }
    }
  }
`

export default MainLayout
