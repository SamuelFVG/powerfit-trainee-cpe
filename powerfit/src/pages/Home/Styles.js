import styled from "styled-components";
import { DivGenerico } from "../../components/LinhaDaTabelaGenerica/Styles";

export const Tabela = styled.div`
  border: solid 2px #6e6d9c;
  border-radius: 5px;
  width: 78%;
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

export const DivTituloTabelaHome = styled(DivGenerico)`
  flex-grow: 1;
`;

export const DivInputsHome = styled.form`
  margin-top: 5%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 2%;
  width: 78%;
`;

export const DivGeralHome = styled(DivGenerico)`
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
