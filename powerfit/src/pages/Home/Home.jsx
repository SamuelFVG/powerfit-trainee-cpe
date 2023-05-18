import {Titulo,} from "./Styles"
import {BotaoGenerico,InputGenerico,LinkGenerico,Header,LinhaDaTabelaGenerica }  from "../../components"


export default function Home() {
    const obj =  { //vetor de objetos no final
        nome: 'Nome genérico',
        cargo: 'Cargo genérico',
        cor_doodle: '#aaa',
        atividade: 'Atividade Genérica',
        horas: '12:34'
    }
    
    return (<div>
        {/* <Header/>
        <Titulo>Home</Titulo>
        <BotaoGenerico/>
        <LinkGenerico/> */}
        <LinhaDaTabelaGenerica dados={obj}/>
        <InputGenerico/>
    </div>)
           
}