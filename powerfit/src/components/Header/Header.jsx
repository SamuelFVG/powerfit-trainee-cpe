import { HeaderG, BotoesHeader, LogoWrapperHeader } from "./Styles";
import { LogoGenerica } from "../../components";
import { BotaoGenerico } from "../../components";
//import { LinkGenerico } from "../../components";

export default function Header() {
  return (
    <HeaderG>
      <LogoWrapperHeader>
        <LogoGenerica texto={"PowerFit"} backgroundColor={"#04040B"} />
      </LogoWrapperHeader>
      <BotoesHeader>
        <BotaoGenerico texto={"textoHeader1"} />
        <BotaoGenerico texto={"Cadastro"} />
      </BotoesHeader>
    </HeaderG>
  );
}
