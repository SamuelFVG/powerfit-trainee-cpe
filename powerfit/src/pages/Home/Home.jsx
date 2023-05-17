import {Titulo} from "./Styles"
import {BotaoGenerico}  from "../../components"
import {LinkGenerico} from "../../components"
import { Header } from "../../components"
import { HeaderG } from "../../components/Header/Styles"

export default function Home() {
    return (
        <div>
            <HeaderG/>
            <Titulo>Home</Titulo>
            <BotaoGenerico/>
            <LinkGenerico/>
        </div>
    )
}