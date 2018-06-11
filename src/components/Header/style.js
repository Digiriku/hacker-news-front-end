import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    background: #ffffff;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    justify-content: center;
`;

export const HeaderWrapperInner = styled.div`
    display: flex;
    max-width: 1024px;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

export const ListWrapper = styled.div`
  display: flex;
  div{
    margin-right: 0.5rem;
    cursor: pointer;
    &:hover{
      color: #ff6500;
    }
  }
`;
