import Button from "../button";
import "./operational-button.css"


function OperationButtons(props){

    return(
        
        <Button label="opBtn" className={props.className} value={props.value} btnPress={props.btnPress} id={props.id}/>
    );
}
export default OperationButtons;