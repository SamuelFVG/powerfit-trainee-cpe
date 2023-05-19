import styled from "styled-components";

export const Fundo = styled.div`
  background-color: #0a0a16;
  width: 50%;
  height: 100%;
`;

export const Caixa = styled.div`
  width: 500px;
  height: 300px;
  background-color: #0a0a16;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input:nth-child(1) {
    width: 467px;
    height: 30px;
    color: white;
    border: 2px solid;
    border-color: #df5031;
    margin-bottom: 9px;
    border-radius: 5px;
    background-color: #0a0a16;
  }
  input:nth-child(2) {
    width: 467px;
    height: 30px;
    color: white;
    border: 2px solid;
    border-color: #ffffff;
    border-radius: 5px;
    background-color: #0a0a16;
  }
`;
