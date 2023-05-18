import {Titulo,} from "./Styles"
import { Tabela } from "./Styles"
import { TopoTabela } from "./Styles"
import { DivGenerico } from "../../components/LinhaDaTabelaGenerica/Styles"

import {BotaoGenerico,InputGenerico,LinkGenerico,Header,LinhaDaTabelaGenerica }  from "../../components"


const obj =  { //vetor de objetos no final
    nome: 'Nome genérico',
    cargo: 'Cargo genérico',
    cor_doodle: '#aaa',
    atividade: 'Atividade Genérica',
    horas: '12:34'
}

export default function Home() {
    
    return (<div>
    <Tabela>
        <TopoTabela>
            <DivGenerico>Perfil</DivGenerico>
            <DivGenerico>Atividade</DivGenerico>
            <DivGenerico>Tempo</DivGenerico>
        </TopoTabela>
        <LinhaDaTabelaGenerica dados={obj}/>
        <LinhaDaTabelaGenerica dados={obj}/>
        <LinhaDaTabelaGenerica dados={obj}/>
        <LinhaDaTabelaGenerica dados={obj}/>
        <LinhaDaTabelaGenerica dados={obj}/>
        <LinhaDaTabelaGenerica dados={obj}/>
    </Tabela>
        
    </div>)
}

{/* <Header/>
<Titulo>Home</Titulo>
<BotaoGenerico/>
<LinkGenerico/> 
<InputGenerico/> */}