import { FooterG } from "./Styles";
import { ImageWrapperFooter } from "./Styles";
import { LogoWrapperFooter } from "./Styles";
import { LogoGenerica } from "../../components";
import Icones from "../../assets/Icones_social_media.png";

export default function Footer() {
  return (
    <div>
      <FooterG>
        <LogoWrapperFooter>
          <LogoGenerica texto={"PowerFit"} />
        </LogoWrapperFooter>
        <ImageWrapperFooter>
          <img src={Icones} />
        </ImageWrapperFooter>
      </FooterG>
    </div>
  );
}
