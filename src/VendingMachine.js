import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <>
            <h1>This is a vending machine</h1>
            <ul>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/sardine">Sardine</Link></li>
                <li><Link to="/sprite">Sprite</Link></li>
            </ul>
        </>
    )
}

export default VendingMachine;