import React, {useState} from 'react'
import Header from "./Header"
import "./SkillsPage.css"
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SkillsPage(){

    const [frontEnd, setFrontEnd] = useState(false);
    const [backEnd, setBackEnd] = useState(false);
    return (
        <div className = "SkillsPage">
            <Header/>

            <div className = "SkillsPage-center">
                <div className = "SkillsPage-largeText">About Me</div>
                <div className = "SkillsPage-smallText">
                I am a third year Computer Science Major / Electrical Engineering Minor at the University of Florida, 
                starting my coding journey working in Java, and C++. I’ve become most comfortable using C++, but more recently
                 (within the last 2 years) I’ve been working with React.js and Native, making web apps, and developing mobile apps
                  for personal and class projects. I also have some experience working with backend, specifically using the MERN stack
                   when creating a mobile app to store user data (login information, location, etc.). Although most of my interests 
                   have been in front-end development, I hope to take on the role of a full-stack developer later in my career.

                </div>
                <div className = "SkillsPage-headerText">Skills</div>
                <div className = "SkillsPage-bar">
                    <div className = "SkillsPage-barText">C++</div>
                    <ProgressBar variant = "success" animated now = {90}></ProgressBar>
                </div>

                <div className = "SkillsPage-bar">
                <div className = "SkillsPage-barText">Java</div>
                    <ProgressBar animated now = {70}></ProgressBar>
                </div>

                <div className = "SkillsPage-bar">
                <div className = "SkillsPage-barText">React.js / Native</div>
                    <ProgressBar variant = "danger" animated now = {70}></ProgressBar>
                </div>
                
                <div className = "SkillsPage-bar">
                <div className = "SkillsPage-barText">HTML / CSS</div>
                    <ProgressBar  variant = "warning" animated now = {60}></ProgressBar>
                </div>

                <div className = "SkillsPage-bar">
                <div className = "SkillsPage-barText">Python</div>
                    <ProgressBar variant = "info" animated now = {50}></ProgressBar>
                </div>

                <div className = "SkillsPage-headerText">Interests</div>
                <div className = "SkillsPage-interestHeaderText" onClick = {() => setFrontEnd(!frontEnd)}>
                    Front End
                </div>
                {frontEnd && <div>Explaining stuff ive done with front end stuff</div>}

                <div className = "SkillsPage-interestHeaderText" onClick = {() => setBackEnd(!backEnd)}>
                    Back-end / Fullstack
                </div>
                {backEnd && <div>Explaining stuff ive done with front end stuff</div>}
            </div>
        </div>
    )
}

