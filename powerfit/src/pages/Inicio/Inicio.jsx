import {TituloInicio} from "./Styles"
import {SubTituloInicio} from "./Styles"
import {TextoInicio} from "./Styles"
import {CaixaTextoInicio} from "./Styles"
import {CaixaImagemInicio} from "./Styles"
import {ContentInicio} from "./Styles"
import ImagemInicio from "../../assets/Imagem_inicio.png"
import { Footer } from "../../components"
import { Header } from "../../components"


export default function Inicio() {
    return (
        <div>
                <Header/>
                <ContentInicio>
                    <CaixaTextoInicio>
                        <TituloInicio>Mais que uma academia</TituloInicio> 
                        <SubTituloInicio>Um estilo de vida </SubTituloInicio>
                        <TextoInicio>Venha para a PowerFit e alcançe os resultados que você tanto deseja</TextoInicio>
                        </CaixaTextoInicio>
                    <CaixaImagemInicio><img src={ImagemInicio} /></CaixaImagemInicio>
                </ContentInicio> 
                <Footer/>              
        </div>

        
    )
}