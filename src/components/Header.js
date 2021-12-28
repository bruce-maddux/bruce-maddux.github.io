import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
export default function Header()
{
    return (
        <div className = "Header">
            <div className = "Header-blank"></div>
            <Link className = "Header-name" to="/">Bruce Maddux</Link>
            <Link className = "Header-elements" to="/skills">Skills</Link>
            <Link className = "Header-elements" to="/contact">Contact</Link>
            <Link className = "Header-elements" to="/project">Projects</Link>
             
        </div>
        );
}