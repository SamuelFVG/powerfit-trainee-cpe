import {LinhaDaTabelaG} from "./Styles"
import { DivPerfil } from "./Styles"
import { DoodleUsuario } from "./Styles"

export default function LinhaDaTabelaGenerica({dados}) {
    return (<>
        <LinhaDaTabelaG><DoodleUsuario/></LinhaDaTabelaG>
        <div>{dados.nome}</div>
        <div>{dados.cargo}</div>
        <div>{dados.cor_doodle}</div>
        <div>{dados.atividade}</div>
        <div>{dados.horas}</div>
    </>)
}

// nome: 'Nome genérico',
// cargo: 'Cargo genérico',
// cor_doodle: '#aaa',
// atividade: 'Atividade Genérica',
// horas: 1234