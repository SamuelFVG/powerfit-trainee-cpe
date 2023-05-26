import styled from "styled-components";

export const DivFakeBody = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const EditContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: #0a0a16;
  @media (max-width: 500px) {
    width: 85%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: stretch;
  }
`;

export const EditorContainer = styled.div`
  width: 450px;
  height: 600px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0a0a16;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 100%;
    height: 45rem;
  }
`;

export const DivLabel = styled.label`
  flex-direction: line;
  justify-content: left;
  align-items: left;
  width: 67%;
  height: 13 px;
  padding-bottom: 10px;
  font-size: 13px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Entrada = styled.input`
  background: #0a0a16;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  padding-left: 10px;
  height: 50px;
  width: 300px;
  color: white;
  font-family: "Noto sans", sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  &::placeholder {
    font-style: italic;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    width: 100%;
  }
`;

export const DivField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: left;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const DivFieldBotão = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 15%;
  }
`;
