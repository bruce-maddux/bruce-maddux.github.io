import React from 'react'
import Header from './Header'
import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PvE from './PvE.js'
import {BallTriangle} from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PopUp from './PopUp'
class ContactPage extends React.Component {
    state = {
        loading: true
      };
    
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({loading: false}) //After 1 second, set loading to false
        }.bind(this), 1500)
    }

    handleGithubClick(){
        window.open('https://github.com/bruce-maddux');
    }
    handleLinkedinClick(){
        window.open('https://www.linkedin.com/in/bruce-maddux-3269901bb/');
    }
    handleEmailClick(){
        window.open('mailto:brucema7@gmail.com')
    }
    render() {
        const { loading } = this.state;
        return (
                <div className = "ContactPage">
                    {loading && 
                    <div className = "ContactPage-loading">
                        <div className = "ContactPage-loadingIcon">
                            <BallTriangle
                            height = {100}
                            width = {100}
                            color="grey"
                            arialLabel="loading-indicator"
                            />
                        </div>
                    </div> 
                    }
                    <div className = "ContactPage-PopUp">
                        <PopUp></PopUp>
                    </div>
                    <div className = "ContactPage-header">
                        <Header/>
                    </div>
                    <div className = "ContactPage-PvE">
                        <PvE/>
                    </div>
                    
                    <div className = "ContactPage-center">
                        <div className = "ContactPage-largeText">Get in touch</div>
                        <div className = "ContactPage-smallText">brucema7@gmail.com</div>
                        <div className = "ContactPage-smallText">727-698-0062</div>
                        
                        <div className = "ContactPage-socialContainer">
                                <FontAwesomeIcon className = "ContactPage-google" icon= {faEnvelope} size = '10x' onClick = {this.handleEmailClick} />
                                <FontAwesomeIcon className = "ContactPage-linkedIn" icon= {faLinkedin} size = '10x' onClick = {this.handleLinkedinClick}/>
                                <FontAwesomeIcon className = "ContactPage-github" icon= {faGithub} size = '10x' onClick = {this.handleGithubClick}/>
                        </div>
                    </div>
                    
                </div>
            )
    }  
}
export default ContactPage;