import React from "react";
import logo from '../img/download.jpg';
const Navbar =() =>{
    return(
        <React.Fragment>
            <nav className="nav">
                <div>
                <img src={logo}/>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;