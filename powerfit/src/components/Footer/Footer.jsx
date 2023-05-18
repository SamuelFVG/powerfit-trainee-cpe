import {FooterG} from "./Styles"
import {ImageWrapper} from "./Styles"
import {LogoWrapper} from "./Styles"
import { LogoGenerica } from "../../components"
import Icones from "../../assets/Icones_social_media.png"


export default function Footer() {
    return(

        <div>
            <FooterG>
                <LogoWrapper>
                    <LogoGenerica texto={"PowerFit"}/>
                </LogoWrapper>
                <ImageWrapper>
                <img src={Icones} />
                </ImageWrapper>
            </FooterG>
        </div>


    )
}