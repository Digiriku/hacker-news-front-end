import styled from 'styled-components';


export default styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-evenly;
  // align-items: stretch;
  // align-content: flex-start;
  justify-content: center;
  padding: 1rem 0 0 1rem;
  margin: 1rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
