import { HeaderG, BotoesHeader } from "./Styles";
import { LogoWrapperHeader } from "./Styles";
import { LogoGenerica } from "../../components";
import { BotaoGenerico } from "../../components";

export default function Header() {
  return (
    <HeaderG>
      <LogoWrapperHeader>
        <LogoGenerica texto={"PowerFit"} backgroundColor={"#04040B"} />
      </LogoWrapperHeader>
      <BotoesHeader>
        <BotaoGenerico texto={"textoHeader1"} />
        <BotaoGenerico texto={"textoHeader2"} />
      </BotoesHeader>
    </HeaderG>
  );
}
