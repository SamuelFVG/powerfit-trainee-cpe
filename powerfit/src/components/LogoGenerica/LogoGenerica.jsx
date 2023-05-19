import { LogoG } from "./Styles";
import { LogoText } from "./Styles";

import Logo from "../../assets/Logo.png";

export default function LogoGenerica({ texto, backgroundColor }) {
  return (
    <LogoG style={{ backgroundColor }}>
      <img src={Logo} />
      <LogoText>{texto}</LogoText>
    </LogoG>
  );
}
