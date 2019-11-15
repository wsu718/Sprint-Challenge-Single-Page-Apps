import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/characters">CHARACTERS</Link></li>
                {/* <li><Link to="/episodes">EPISODES</Link></li> */}
                <li><Link to="/locations">LOCATIONS</Link></li>
            </ul>
        </nav>
    )
}