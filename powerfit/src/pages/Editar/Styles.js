import styled from "styled-components";

export const LogoEditar = styled.div`
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

export const EditContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:top;
  align-items: center;
  background-color: #0A0A16;
  `
  export const EditorContainer = styled.div`
  width: 450px;
  height: 600px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  background-color: #0A0A16;
  border-radius: 20px;
`
export const DivLabel = styled.label`
flex-direction: line;
justify-content: left;
align-items: left;
width: 67%;
height: 13 px;
padding-bottom:10px;
`

export const Entrada = styled.input`
    background: #0A0A16;
        border: 1px solid #ffffff;
        border-radius: 3px;
        height: 50px;
        width: 300px;
        border-radius: 10px;
        color: white;
        padding: 0 10px;
        font-family: 'Noto sans', sans-serif;
        font-size: 15px;
        display: flex;
        align-items: center;
        &::placeholder{
            font-style: italic;
        }
`
export const BotãoSalvar = styled.button`
    background: #0A0A16;
        border: 2px solid #f2f1fb;
        border-radius: 5px;
        height: 45px;
    color: #f2f1fb;
        margin-bottom: 50px;
        margin-top: 20px;
    width: 120px;
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
`
export const DivField = styled.div`
display:flex;
flex-direction:column;
`
;