import { LinkG } from "./Styles";
import { Link } from "react-router-dom";

export default function LinkGenerico({ texto, rota }) {
  return (
    <LinkG>
      {/* <Link to={"/cadastro"}>Cadastro</Link> */}
      <a href={String(rota)}>{texto}</a>
    </LinkG>
  );
}
{
  /* <Link to={rota}>{texto}</Link> */
}
