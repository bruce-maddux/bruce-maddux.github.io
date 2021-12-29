import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
export default function Header()
{
    return (
        <div className = "Header">
            <Link className = "Header-name" to="/">Bruce Maddux</Link>
            <div className = "Header-container">
               <Link className = "Header-elements" to="/skills">About</Link>
               <Link className = "Header-elements" to="/contact">Contact</Link>
               <Link className = "Header-elements" to="/project">Projects</Link>
            </div>
        </div>
        );
}