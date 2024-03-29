import { DropDownG } from "./Styles";
import { DivSelect } from "./Styles";
import { DivOption } from "./Styles";
import { DivDefault } from "./Styles";
import {CustomSelector} from "./Styles"

function DropDownGenerico(props) {return(
  <CustomSelector>
  <DivSelect 
    defaultValue={props.default} required onChange={props.onChange}>
    <DivDefault hidden id="default" value={props.default}>{props.default}</DivDefault>
  {props.options.map((item, index) =>   {
    return(
        <DivOption key={index}value={item}>{item}</DivOption>
    )
  ;}
)}
</DivSelect>
</CustomSelector>
);
};

export default DropDownGenerico;
