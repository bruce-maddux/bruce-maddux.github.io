import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
export default function Header()
{
    return (
        <div className = "Header">
             <Link className = "Header-elements" to="/">Main Page</Link>
             <Link className = "Header-elements" to="/contact">Contact</Link>
             <Link className = "Header-elements" to="/project">Projects</Link>
        </div>
        );
}