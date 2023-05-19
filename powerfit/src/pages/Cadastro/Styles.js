import styled from "styled-components"


export const LogoCadastro = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* img {
        width: 70px;
        height: 70px;
    } */
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
        margin-bottom: 25px;
        margin-top: 10px;
    color: white;
        padding: 0 10px;
        font-family: 'Roboto';
        font-size: 18px;
        display: flex;
        align-items: center;
        &::placeholder{
            font-style: italic;
        }
`

export const CadastroContainer = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A0A16;
  border-radius: 20px;
`



export const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A0A16;
`



export const SubmitButton = styled.button`
    background: #0A0A16;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        height: 50px;
    color: grey;
        margin-bottom: 25px;
        margin-top: 10px;
    width: 300px;
        padding: 0 10px;
        font-family: 'Roboto';
        font-size: 18px;
        display: flex;
        align-items: center;
    justify-content: center;
        &::placeholder{
            font-style: italic;
        }
`
export const PalavraLink = styled.div`

    color: #DF5031;

`
