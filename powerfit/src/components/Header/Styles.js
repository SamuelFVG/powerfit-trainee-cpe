import styled from "styled-components";

export const HeaderG = styled.div`
  background-color: #04040b;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 7rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
  }
`;

export const LogoWrapperHeader = styled.div`
  margin-left: 11%;
  display: flex;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;

export const BotoesHeader = styled.div`
  display: flex;
  gap: 11%;
  margin-right: 8%;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    flex-direction: row;
    align-items: center;
  }
`;
