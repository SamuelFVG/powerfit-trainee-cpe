import { LinkG } from "./Styles";

export default function LinkGenerico({ texto, rota }) {
  return (
    <LinkG>
      <a href={String(rota)}>{texto}</a>
    </LinkG>
  );
}
