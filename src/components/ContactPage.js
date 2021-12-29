import React from 'react'
import Header from './Header'
import "./ContactPage.css"


export default function ContactPage(){
    return (
        <div className = "ContactPage">
            <Header/>
            <div className = "ContactPage-center">
                <div className = "ContactPage-largeText">Contact Me</div>
            </div>
        </div>
    )
}