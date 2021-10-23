import React from "react";
import { Link } from "react-router-dom";
const GetUser = ()=>{
    return(
        <center className="btndiv"><Link className="gt-users" to="/getuser">Get Users</Link></center>
    );
}
export default GetUser;