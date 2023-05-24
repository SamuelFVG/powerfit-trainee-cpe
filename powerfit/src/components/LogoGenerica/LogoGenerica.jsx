import { LogoG, LogoText, LogoImagem } from "./Styles";

import Logo from "../../assets/Logo.svg";

export default function LogoGenerica({ texto, backgroundColor }) {
  return (
    <a href={texto == "PowerFit" ? "/" : "?"}>
      <LogoG style={{ backgroundColor }}>
        <LogoImagem src={Logo} />
        <LogoText>{texto}</LogoText>
      </LogoG>
    </a>
  );
}
