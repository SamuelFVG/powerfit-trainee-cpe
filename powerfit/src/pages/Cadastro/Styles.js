import styled from "styled-components"


export const LogoCadastro = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 60px;
        height: 60px;
    }
    h2{
        margin-left: 10px;
        color: white;
        font-weight: 700;
        font-size: 40px;
    }
`



export const InputForm = styled.input`
    background: #0A0A16;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        height: 50px;
    width: 300px;
        border-radius: 10px;
        margin-bottom: 25px;
        margin-top: 10px;
    color: white;
        padding: 0 10px;
        font-family: 'Noto sans', sans-serif;
        font-size: 15px;
        display: flex;
        align-items: center;
        &::placeholder{
            font-style: italic;
        }
    @media (max-width: 500px) {
    width: 95%;
    margin-left: 2.5%;
  }
`

export const CadastroContainer = styled.div`
  width: 30%;
  height: 50%;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0A0A16;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 80%;
  }
`



export const SingUpContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A0A16;
`



export const SubmitButton = styled.button`
    background: #0A0A16;
        border: 2px solid #f2f1fb;
        border-radius: 5px;
        height: 45px;
    color: #f2f1fb;
        margin-left: 25%;
        margin-bottom: 25px;
        margin-top: 10px;
    width: 50%;
        padding: 0 10px;
        font-family: 'Noto sans', sans-serif;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &::placeholder{
            font-style: italic;
        }
        :hover {
    border-color: #df5031;
    color: #df5031;
  }
  @media (max-width: 500px) {
    margin-left: 25%;
  }
`
export const PalavraLink = styled.div`
    margin-bottom: 15%;
    color: #DF5031;

`
export const Menu = styled.div`
    margin-bottom: 25px;

    @media (max-width: 500px) {
    width: 95%;
    
  }
`