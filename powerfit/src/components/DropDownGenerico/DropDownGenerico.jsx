import { DropDownG } from "./Styles";
import { DivSelect } from "./Styles";
import { DivOption } from "./Styles";

function DropDownGenerico(props) {return(
  <DivSelect>
  {props.nome.map((item, index) =>   {
    return(
        <DivOption value={index}>{item}</DivOption>
    )
  ;}
)}
</DivSelect>
);
};

export default DropDownGenerico;
