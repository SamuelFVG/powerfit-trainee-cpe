import styled from "styled-components";
import { DivGenerico } from "../../components/LinhaDaTabelaGenerica/Styles";

export const Titulo = styled.h1`
  font-size: 100px;
`;

export const Tabela = styled.div`
  border: solid 2px #6e6d9c;
  border-radius: 5px;
  //background-color:#aaa;
  width: 78%;
`;

export const TopoTabela = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  //border-radius: 5px 5px 0 0;
  background-color: #6e6d9c;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivGenericoTitulo = styled(DivGenerico)`
  flex-grow: 1;
`;
