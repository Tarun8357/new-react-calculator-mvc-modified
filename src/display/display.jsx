import "./display.css"

function Display (props){
    return(
    <>
    <input className ="display" aria-label="display" type="text" value={props.name} />
    </>
    );

    
    
}
export default Display;
