import styled from "styled-components"

export const LinhaDaTabelaG = styled.div`
    border: solid 1px white ;

    margin-top: 1%;
    margin-bottom: 1%;
    height: 50px;
    width: 78%; 
    display: flex;
    justify-content: space-between      ;
`;  

export const Perfil = styled.div`
    width: 180px;
    gap: 3%;
    
    display: flex;
    justify-content: left;
`;

export const InformacoesPerfil = styled.div`
    flex-grow: 1;    

    display: flex;
    flex-direction: column; 
`;

export const DivGenerico = styled.div`
    flex-grow: inherit;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Doodle = styled.div` 
    background-color: #40a;
    border-radius: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
`;