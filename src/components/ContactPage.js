import React from 'react'
import Header from './Header'
import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PvE from './PvE.js'
import PopUp from './Modal'
export default function ContactPage(){
    function handleGithubClick(){
        window.open('https://github.com/knexprince');
    }
    function handleLinkedinClick(){
        window.open('https://www.linkedin.com/in/bruce-maddux-3269901bb/');
    }
    return (
        <div className = "ContactPage">
            <div className = "ContactPage-header">
                <Header/>
            </div>
            <div className = "ContactPage-PvE">
                <PvE/>
            </div>
            <div className = "ContactPage-center">
                <div className = "ContactPage-largeText">Contact Me</div>
                <div className = "ContactPage-smallText">brucema7@gmail.com</div>
                <div className = "ContactPage-smallText">727-698-0062</div>
                <div className = "ContactPage-socialContainer">
                    <div className = "ContactPage-socialDiv">
                        <FontAwesomeIcon className = "ContactPage-google" icon= {faEnvelope} size = '10x'/>
                    </div>
                    <div className = "ContactPage-socialDiv" onClick = {handleLinkedinClick}>
                         <FontAwesomeIcon className = "ContactPage-linkedIn" icon= {faLinkedin} size = '10x'/>
                    </div>
                    <div className = "ContactPage-socialDiv" onClick = {handleGithubClick}>
                        <FontAwesomeIcon className = "ContactPage-github" icon= {faGithub} size = '10x'/>
                    </div>
                </div>
            </div>
            <div>
                <PopUp></PopUp>
            </div>

        </div>
    )
}