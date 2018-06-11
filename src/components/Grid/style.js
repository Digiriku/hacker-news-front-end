import styled from 'styled-components';


export default styled.div`
  max-width: 72rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: flex-start;

  &:after {
    clear: both;
  }
`