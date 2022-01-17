import React from 'react'
import Header from "./Header"
import "./MainPage.css"
import { Link } from "react-router-dom";
import {Grid} from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './background.scss'

class MainPage extends React.Component{
    state = {
        loading: true
      };
    
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({loading: false}) //After 1 second, set loading to false
        }.bind(this), 1500)
    }
    render(){
        const { loading } = this.state;
        return (
        <div className = "body">
            {loading && 
            <div className = "MainPage-loading">
            <div className = "MainPage-loadingIcon">
                <Grid
                height = {100}
                width = {100}
                color="grey"
                arialLabel="loading-indicator"
                />
            </div>
        </div> }
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
}
export default MainPage;

