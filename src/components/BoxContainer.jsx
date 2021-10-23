import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import Sdata from "./Sdata";

function userCard(val){
    return (
        <Box imgsrc={val.imgurl} uid={val.ids} name={val.name} email = {val.mail} key={val.key}/>
    );
}

const BoxContainer=()=>{
    return(
        <React.Fragment>
            <div className="Box-container">
                {Sdata.map(userCard)}
            </div>
            <center ><Link className="gt-users" to='/'>Go Back</Link></center>
        </React.Fragment>
    );
}

export default BoxContainer;