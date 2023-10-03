import { FooterG, SocialMediaLogos } from "./Styles";
import { LogoGenerica } from "../../components";
import Icones from "../../assets/Icones_social_media.svg";

export default function Footer() {
  return (
    <div>
      <FooterG>
        <LogoGenerica texto={"PowerFit"} backgroundColor={"#04040B"} />
        <SocialMediaLogos src={Icones} />
      </FooterG>
    </div>
  );
}
