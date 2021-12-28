import React from 'react'
import Header from "./Header"
import "./MainPage.css"
import { Link } from "react-router-dom";


export default function MainPage(){
    return (
        <div className = "MainPage">
            <Header/>
            <div className = "MainPage-center">
                <div className = "MainPage-largeText">Hey, I'm Bruce.</div>
                <div className = "MainPage-smallText">Software Development Engineer --- Computer Science @ UF</div>
                <Link className = "MainPage-button" to="/skills">Learn more about me!</Link>


            </div>
        </div>
        
    )
}

