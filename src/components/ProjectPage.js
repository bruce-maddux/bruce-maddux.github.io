import React from 'react'
import Header from "./Header"
import './ProjectPage.css'
import './background.scss'
export default function ProjectPage(){
    return (
        <div className = "ProjectPage">
            <Header/>
            <div className = "ProjectPage-container">
                <div className = "ProjectPage-title">Projects</div>
                <div style={{ borderTop: "2px solid #fff ", width: "60vw"}}></div>
            </div>
        </div>
    )
}

