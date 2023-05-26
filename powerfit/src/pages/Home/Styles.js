import styled from "styled-components";
import { DivGenerico } from "../../components/LinhaDaTabelaGenerica/Styles"; //pra facilitar, já importei direto do divgenerico do styles

export const DivGeral = styled(DivGenerico)`
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Inputs = styled.form`
  margin-top: 5%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 2%;
  width: 78%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Tabela = styled.div`
  border: solid 2px #6e6d9c;
  border-radius: 5px;
  width: 78%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const TopoTabela = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #6e6d9c;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TituloTabela = styled(DivGenerico)`
  flex-grow: 1;
`;
