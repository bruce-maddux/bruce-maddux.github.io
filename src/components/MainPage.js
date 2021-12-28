import React from 'react'
import { Link , Outlet} from "react-router-dom";
import Header from "./Header"
import "./MainPage.css"

export default function MainPage(){
    return (
        <div className = "MainPage">
            <Header/>
            <div clasName = "MainPage-center"></div>
            <h1>Main Page</h1>
            
        </div>
        
    )
}

