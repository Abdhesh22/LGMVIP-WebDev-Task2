import React from "react";

const Box = (props) =>{
    return(
        <React.Fragment>
            <div className="box">
                <img src={props.imgsrc} alt="People image"/>
                <div className="box-txt">
                    <h6>User id: {props.uid} </h6>  
                    <h5>Name: {props.name} </h5> 
                    <h6>{props.email}</h6>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Box;