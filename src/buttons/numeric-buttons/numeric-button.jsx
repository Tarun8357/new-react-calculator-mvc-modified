
import Button from "../button";
import "./numeric-button.css"


function NumericButtons(props){

    return(
        <Button className={props.className} label={props.label} value={props.value} btnPress={props.btnPress} id={props.id}/>
    );
}
export default NumericButtons