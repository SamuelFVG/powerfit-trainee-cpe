import {Titulo,} from "./Styles"
import {BotaoGenerico,InputGenerico,LinkGenerico,Header,LinhaDaTabelaGenerica }  from "../../components"


export default function Home() {
    const obj =  {
        nome: 'Nome genérico',
        cargo: 'Cargo genérico',
        cor_doodle: '#aaa',
        atividade: 'Atividade Genérica',
        horas: 1234
    }
    
    return (<div>
        {/* <Header/>
        <Titulo>Home</Titulo>
        <BotaoGenerico/>
        <LinkGenerico/> */}
        <LinhaDaTabelaGenerica data={obj}/>
        <InputGenerico/>
    </div>)
           
}