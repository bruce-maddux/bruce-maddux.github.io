import React from 'react'
import Header from "./Header"
import "./MainPage.css"
import { Link } from "react-router-dom";

export default function MainPage(){
    return (
        <div className = "MainPage-wrapper">
            <Header/>
            <div className = "MainPage-center">
                <div className = "MainPage-largeText">Hey, I'm Bruce.</div>
                <div className = "MainPage-smallText">Software Development Engineer --- Computer Science @ UF</div>
                <Link className = "MainPage-link" to="/skills">
                    <button className = "MainPage-button">
                         Learn more about me
                    </button>                   
                </Link>
            </div>
        </div>
        
    )
}

