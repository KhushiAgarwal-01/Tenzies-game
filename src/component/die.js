import React from "react"

export default function Die(props){
    const styles = {
        backgroundColor : props.held ? "#59E391":"white"

    }


   
return(
    <div className="die-comp" style={styles} onClick={props.handlechange}>   
        <h2  className="die-num">
        {props.number==1 && <i className="fa-solid fa-dice-one"></i> ||
        props.number==2 && <i className="fa-sharp fa-solid fa-dice-two"></i>||
        props.number==3 && <i className="fa-sharp fa-solid fa-dice-three"></i>||
        props.number==4 && <i className="fa-sharp fa-solid fa-dice-four"></i>||
        props.number==5 && <i className="fa-sharp fa-solid fa-dice-five"></i>||
        props.number==6 && <i className="fa-sharp fa-solid fa-dice-six"></i>
        } 
        </h2>
        </div>
)
}