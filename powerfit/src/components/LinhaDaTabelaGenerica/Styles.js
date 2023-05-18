import styled from "styled-components"

export const LinhaDaTabelaG = styled.div`
    /* border: solid 1px green ; */
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    height: 50px;
    width: 100%; 
    display: flex;  
    gap: 25%;
    justify-content: center;
`;  

export const Perfil = styled.div`
    width: 200px;
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
    background-color: #6E6D9C;
    border-radius: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
`;