import { DropDownG } from "./Styles";
import { DivSelect } from "./Styles";
import { DivOption } from "./Styles";
import { DivDefault } from "./Styles";

function DropDownGenerico(props) {return(
  
  <DivSelect required>
  <DivDefault value="" selected disabled hidden>{props.default}</DivDefault>
  {props.options.map((item, index) =>   {
    return(
        <DivOption value={item}>{item}</DivOption>
    )
  ;}
)}
</DivSelect>
);
};

export default DropDownGenerico;
