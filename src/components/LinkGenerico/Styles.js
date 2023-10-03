import styled from "styled-components";
//import { Button } from "antd";

export const LinkG = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2f1fb;
  width: 8rem;
  //height: 3.4rem;
  font-size: 1rem;
  font-family: "Noto Sans", sans-serif;

  :hover {
    color: #df5031;
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
