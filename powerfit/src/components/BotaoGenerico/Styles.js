import styled from "styled-components";
//import { Button } from "antd";

export const BotaoG = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0a0a16;
  border: 2px solid #f2f1fb;
  color: #f2f1fb;
  border-radius: 5px;
  width: 8rem;
  height: 3.4rem;
  font-size: 1rem;
  font-family: "Noto Sans", sans-serif;
  :hover {
    border-color: #df5031;
    color: #f2f1fb;
    background-color: #df5031;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    width: fit-content;
  }

  @media (max-width: 300px) {
    font-size: 11px;
    width: 6rem;
  }
`;
