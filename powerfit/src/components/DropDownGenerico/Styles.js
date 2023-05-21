import styled from "styled-components";

export const DropDownG = styled.div``;  
export const DivSelect = styled.select`
  background-color: #0a0a16;
  width: 300px;
  height: 50px; 
  border: 1px solid;
  border-color: #D5D5D5;
  border-radius: 10px;
  size: 35px;
  padding: 0 10px;
  font-family: "Noto Sans", sans-serif;
  font-size: 15px;
  color:#ffffff;
  &:hover {
    border-color: #ffffff  ;
  }
  &:invalid {
    font-style:italic;
    color: #7D7D7D;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    width: 100%;
    /* margin-left: 2.5%; */
  }
  @media (max-width: 300px) {
    width: 80%;
    margin-left: 10%;
  }
`;
export const DivOption = styled.option`
    background-color:#0a0a16;
    color:#ffffff;
    height: 50px;
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    @media (max-width: 500px) {
    font-size: 11px;
    width: 100%;
    margin-left: 2.5%;
  }
  &:invalid {
    font-style:italic;
    color: #7D7D7D;
  }
    `;
export const DivDefault = styled.option`
    background-color:#0a0a16;
    height: 50px;  
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    color: #7D7D7D;
    @media (max-width: 500px) {
    font-size: 11px;
    width: 100%;
    margin-left: 2.5%;
  }
  &:invalid {
    font-style:italic;
    color: #7D7D7D;
  }
`;