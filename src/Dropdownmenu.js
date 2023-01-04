import React from "react";
import './index.css';

function Dropdownmenu(){
    return(
    <>
        <ul style={{position:"absolute", backgroundColor:"white", listStyle:"none", textAlign:"left", padding:"0.5rem 0", fontSize:"1rem", minWidth:"10rem", borderRadius:"0.25rem"}}>
            <li><a className="dropdown-item" href="#!">All Products</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
        </ul>
    </>
)
}

export default Dropdownmenu;