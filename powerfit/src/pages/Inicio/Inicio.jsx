import {Titulo} from "./Styles"
import {SubTitulo} from "./Styles"
import {TextoInicio} from "./Styles"
import {CaixaTexto} from "./Styles"
import {CaixaImagem} from "./Styles"
import {ContentInicio} from "./Styles"
import ImagemInicio from "../../assets/Imagem_inicio.png"
import { LogoGenerica } from "../../components"
import { Footer } from "../../components"


export default function Inicio() {
    return (
        <div>

            <LogoGenerica texto={"PowerFit"}/> 
                <ContentInicio>
                    <CaixaTexto>
                        <Titulo>Mais que uma academia</Titulo> 
                        <SubTitulo>Um estilo de vida </SubTitulo>
                        <TextoInicio>Venha para a PowerFit e alcançe os resultados que você tanto deseja</TextoInicio>
                        </CaixaTexto>
                    <CaixaImagem><img src={ImagemInicio} /></CaixaImagem>
                </ContentInicio> 

            <Footer/>    
            
                    
        </div>

        
    )
}