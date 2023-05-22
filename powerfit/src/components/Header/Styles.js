import styled from "styled-components";

export const HeaderG = styled.div`
  background-color: #04040b;
  display: flex;
  align-items: center;
  height: 7rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

export const LogoWrapperHeader = styled.div`
  margin-left: 11%;
  display: flex;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

export const BotoesHeader = styled.div`
  margin-left: 50%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 11%;

  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
