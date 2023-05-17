import {Titulo} from "./Styles"
import {BotaoGenerico}  from "../../components"
import {LinkGenerico} from "../../components"
import {Header} from "../../components"

export default function Home() {
    return (
        <div>
            <Header/>
            <Titulo>Home</Titulo>
            <BotaoGenerico/>
            <LinkGenerico/>
        </div>
    )
}