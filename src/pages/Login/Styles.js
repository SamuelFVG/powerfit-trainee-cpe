import styled from "styled-components";

export const Texto = styled.div`
  font-size: 15px;

  @media (max-width: 500px) {
    width: 100%;
    font-size: 11px;
  }
  @media (max-width: 300px) {
    width: 100%;
    margin-left: 20px;
    font-size: 11px;
  }
`;

export const InputForm = styled.input`
  background: #0a0a16;
  border: 1px solid #d5d5d5;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  color: white;
  padding: 0 10px;
  font-family: "Noto sans", sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  &::placeholder {
    font-style: italic;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 11px;
  }
  @media (max-width: 300px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const CadastroContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a0a16;
  border-radius: 20px;

  @media (max-width: 700px) {
    width: 65%;
  }
`;

export const SingUpContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a0a16;
`;

export const SubmitButton = styled.button`
  background: #0a0a16;
  border: 2px solid #f2f1fb;
  border-radius: 5px;
  height: 45px;
  color: #f2f1fb;
  margin-left: 25%;
  margin-bottom: 25px;
  margin-top: 10px;
  width: 50%;
  padding: 0 10px;
  font-family: "Noto sans", sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::placeholder {
    font-style: italic;
  }
  :hover {
    border-color: #df5031;
    color: #df5031;
  }
  /* @media (max-width: 1000px) {
    margin-left;
  } */
`;
export const PalavraLink = styled.div`
  color: #df5031;

  @media (max-width: 300px) {
    width: 100%;
    font-size: 11px;
  }
`;

export const DivSubmitButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  margin-top: 5%;
`;
