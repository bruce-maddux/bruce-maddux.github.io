import React from 'react'
import Header from './Header'
import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function ContactPage(){
    return (
        <div className = "ContactPage">
            <Header/>

            <div className = "ContactPage-center">
                <div className = "ContactPage-largeText">Contact Me</div>
                <div className = "ContactPage-smallText">brucema7@gmail.com</div>
                <div className = "ContactPage-smallText">727-698-0062</div>
                <div className = "ContactPage-socialContainer">
                    <FontAwesomeIcon className = "ContactPage-google" icon= {faEnvelope} size = '10x'/>
                    <FontAwesomeIcon className = "ContactPage-linkedIn" icon= {faLinkedin} size = '10x'/>
                    <FontAwesomeIcon className = "ContactPage-github" icon= {faGithub} size = '10x'/>
                </div>
          
            </div>
        </div>
    )
}