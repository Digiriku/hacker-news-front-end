import styled from 'styled-components';


export default styled.div`

  display: flex;
  padding: 0.5rem;
  flex-direction: column;

  flex-grow: 1;
  align-items: stretch;
  align-content: stretch;
  max-width: calc(100% * (1/5));
  background: rgba(255, 255, 255, 0.8);
  background-color: white !important;
  box-shadow: 0px 17px 69px -12px rgba(0,0,0,0.42);
  margin: 16px;
  cursor: hover;



  &:after {
    clear: both;
  }
`