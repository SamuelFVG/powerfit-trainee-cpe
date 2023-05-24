import { LogoG, LogoText, LogoImagem } from "./Styles";
import Logo from "../../assets/Logo.svg";

export default function LogoGenerica({ texto, backgroundColor }) {
  let destination =
    texto === "PowerFit" ? "/" : texto === "PowerFit " ? "/home" : "?";

  return (
    <a href={destination}>
      <LogoG style={{ backgroundColor }}>
        <LogoImagem src={Logo} />
        <LogoText>{texto}</LogoText>
      </LogoG>
    </a>
  );
}
