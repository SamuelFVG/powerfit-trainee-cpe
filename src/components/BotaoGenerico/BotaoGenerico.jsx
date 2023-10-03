import { BotaoG } from "./Styles";

export default function BotaoGenerico({ texto, rota }) {
  return (
    <BotaoG
      onClick={() => {
        if (rota != "---") window.location.assign(String(rota));
      }}
    >
      {texto}
    </BotaoG>
  );
}
