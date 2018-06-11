import styled from 'styled-components';


export default styled.div`

  display: flex;
  padding: 0.5rem;
  flex-direction: column;

  flex-grow: 1;
  align-items: stretch;
  align-content: stretch;
  ${'' /* max-width: calc(100% * (1/5)); */}
  width: 20%;
  background: rgba(255, 255, 255, 0.8);
  background-color: white !important;
  box-shadow: 0px 17px 69px -12px rgba(0,0,0,0.42);
  cursor: hover;
  text-align: center;
  justify-content: space-between;
  margin: 0 1rem 1rem 0;


@media (max-width: 768px) {

  max-width: 45%;
  width: 100%;
  min-height: 200px;
}

@media (max-width: 480px) {
    flex-direction: column;
  max-width: 100%;
  width: 100%;
}



  &:after {
    clear: both;
  }
`
