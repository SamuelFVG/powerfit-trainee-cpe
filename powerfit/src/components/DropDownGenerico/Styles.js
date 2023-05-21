import styled from "styled-components";

export const DropDownG = styled.div``;  
export const DivSelect = styled.select`
  background-color: #0a0a16;
  width: 300px;
  height: 50px; 
  border: 1px solid;
  border-color: #ffffff;
  border-radius: 10px;
  color:#ffffff;
  size: 35px;
  padding: 0 10px;
  margin-top:10px;
  margin-bottom: 25px;
  &:hover {
    border-color: #ffffff  ;
  }
  &:invalid {
    color: #7D7D7D;
  }
`;
export const DivOption = styled.option`
    background-color:#0a0a16;
    color:#ffffff;
    height: 50px;
    `;
export const DivDefault = styled.option`
    background-color:#0a0a16;
    color:blue;
    height: 50px;   
`;