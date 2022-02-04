import React from 'react'
import Header from "./Header"
import './ProjectPage.css'
import './background.scss'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import demo1 from "../photos/demo1.mp4"
import demo2 from "../photos/demo2.mp4"
import demo3 from "../photos/demo3.mp4"
import devPost from '../photos/devpost.svg'

export default class ProjectPage extends React.Component{
    handlePowerSmartGH(){
        window.open('https://github.com/HypnoticMarten77/11277group24');
    }
    handlePowerSmartYT(){
        window.open('https://www.youtube.com/watch?v=sZ7ATT2VFkQ');
    }
    handleSwamphacksGH(){
        window.open('https://github.com/loragonzaleze/swamphacks');
    }
    handleSwamphacksYT(){
        window.open('https://www.youtube.com/watch?v=WTd8nMIg1cM')
    }
    handleEconomicsGH(){
        window.open('https://github.com/loragonzaleze/COP3530Project3')
    }
    handleEconomicsYT(){
        window.open('https://www.youtube.com/watch?v=Ws2WSDp4JKI&feature=youtu.be')
    }
    handleWebsiteGH(){
        window.open('https://github.com/bruce-maddux/my-website')
    }
    handleSwamphacks2022YT(){
        window.open('https://www.youtube.com/watch?v=KCkrM6NPDH8')
    }
    handleSwamphacks2022GH(){
        window.open('https://github.com/bruce-maddux/swamphacks-viii')
    }
    handleSwamphacks2022DP(){
        window.open('https://devpost.com/software/cartit?ref_content=my-projects-tab&ref_feature=my_projects')
    }
    render() {
    return (
        <div className = "ProjectPage">
            <Header/>
            <div className = "ProjectPage-container">
                <div className = "ProjectPage-title">Projects</div>
                <div style={{ borderTop: "2px solid #fff ", paddingBottom: "3vh"}}></div>



                <div className = "ProjectPage-textContainer">
                    <div style = {{flexDirection: "row", display : "flex", alignItems : "center", paddingBottom: "1vh"}}>
                        <div style = {{flexDirection:"row", display: "flex", justifyContent:"center", alignItems:"center"}}>
                            <div className = "ProjectPage-projectName" style = {{ textDecoration: "underline solid #7CFC00"}}>Swamphacks 2022</div>
                            <div className = "ProjectPage-projectName"> CartIt (3rd Place Overall)</div>
                            <FontAwesomeIcon style = {{color: "#ffbb73" }}icon= {faTrophy} size = '2x' />
                        </div>
                        <FontAwesomeIcon  className = "ProjectPage-socials" 
                        style = {{color: "lightgray", position:'absolute', right: "4vw"}}icon= {faGithub} size = '3x' onClick = {this.handleSwamphacks2022GH}/>
                        <FontAwesomeIcon className = "ProjectPage-socials" 
                        style = {{color: "#FF0000", position:'absolute', right: "0vw"}}icon= {faYoutube} size = '3x' onClick = {this.handleSwamphacks2022YT} />
                        <img src = {devPost} alt = "Devpost" className = "ProjectPage-devPost" style = {{ width: 64, position:'absolute', right: "8vw"}} onClick = {this.handleSwamphacks2022DP}/>
                    </div>
                    <div className='ProjectPage-paragraph'>
                    Our app works by using a public dataset that contains grocery store items, as well as the store location. Once logging into the app,
                     we can use the shopping list to add items to buy, edit items, remove items, and switch between different lists. From here, our app 
                     will check the database to find the lowest price, as well as the location. Our app also allows users to upload their own receipts, 
                     which then helps update our database with the lowest prices each day. Our app also allows the user to find the nearest store
                      locations near their current location, as well as their addresses.

                    </div>
                    <div className = 'ProjectPage-paragraph'>
                        Our app was built in React Native for the front-end, and utilized various Google Cloud products for the backend, written in Python. 
                        For example, we used Google Cloud Vision AI and Google Cloud functions to build a pipeline that handles the upload of receipts to 
                        our cloud storage which then triggers a cloud function that parsers the text in the receipt. This data is processed to reflect any 
                        changes in minimum prices in our database. We also used other cloud functions to handle services such as retrieving grocery prices.
                         We also used google maps API and google places API to display user location on a map, and display grocery stores near the user's 
                         location. To run the app locally, we utilized Expo. Checkout our Github Repo for the specific technologies we used, as well as 
                         checkout the README.md for more info!
                    </div>
                    <div style = {{flexDirection:"row", paddingBottom: "5vh"}}>
                         <div className = "ProjectPage-button-74" role="button">React Native</div>
                         <div className = "ProjectPage-button-74" role="button">Google Cloud Functions</div>
                         <div className = "ProjectPage-button-74" role="button">SQL</div>
                         <div className = "ProjectPage-button-74" role="button">Google Cloud Vision AI</div>
                         <div className = "ProjectPage-button-74" role="button">Google Maps</div>
                         <div className = "ProjectPage-button-74" role="button">Google Places</div>
                         <div className = "ProjectPage-button-74" style = {{marginTop: "2vh"}}role="button">Expo</div>
                    </div>
                   
                </div>






                <div className = "ProjectPage-textContainer">
                    <div style = {{flexDirection: "row", display : "flex", alignItems : "center", paddingBottom: "1vh"}}>
                        <div className = "ProjectPage-projectName" style = {{ textDecoration: "underline solid #ffbb73"}}>Power Smart</div>
                        <FontAwesomeIcon style = {{color: "#ffbb73" }}icon= {faLightbulb} size = '2x' />
                        <FontAwesomeIcon  className = "ProjectPage-socials" 
                        style = {{color: "lightgray", position:'absolute', right: "4vw"}}icon= {faGithub} size = '3x' onClick = {this.handlePowerSmartGH}/>
                        <FontAwesomeIcon className = "ProjectPage-socials" 
                        style = {{color: "#FF0000", position:'absolute', right: "0vw"}}icon= {faYoutube} size = '3x' onClick = {this.handlePowerSmartYT} />
                    </div>
                    <div className = "ProjectPage-paragraph">
                        Our application is Project Power Smart, a mobile app for iOS and Android that allows for the user to track their 
                    power bill costs over months, insert and view their appliances, learn about daily tips to save energy, and view their 
                    location to determine if it is optimal for renewable resources. Our app was made using React Native, a UI software. 
                    We used Node.js to set up a JavaScript runtime environment, and Expo, a React framework to run our applications locally 
                    on our devices. Our app aims to help users save energy, and with that save money. I worked mainly on the front-end coding 
                    for this app, creating all the features seen below in the demos as well as organizing and setting up CircleCI integration,
                    team roles and tasks, creating Jest test cases, as well as lots of documentation, which can be seen in the Github Repo.
                    </div>
                    <div className = "ProjectPage-smallHeader">Demos</div>
                    <div className = "ProjectPage-paragraph">
                        Here are a few videos highlighting some of the apps features, which can be accessed by hovering over each video. 
                        You can also find the Github Repo to the project, be sure the checkout the README I wrote if you want to try to app 
                        out locally! There is also a video demo for our class shown as well, where we discuss our value proposition, product backlog, 
                        stretch goals, and other topics during our sprint, which you can find by clicking the Youtube Icon.
                    </div>
                </div>
                <div style = {{flexDirection:"row", paddingBottom: "5vh"}}>
                         <div className = "ProjectPage-button-74" role="button">React Native</div>
                         <div className = "ProjectPage-button-74" role="button">Expo</div>
                         <div className = "ProjectPage-button-74" role="button">Node.js</div>
                         <div className = "ProjectPage-button-74" style = {{marginTop: "2vh"}}role="button">Jest</div>
                </div>
                <div style = {{flexDirection: "row", display: "flex"}}>
                    <video 
                        className = "ProjectPage-demos"
                        key={demo1}
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}
                        src={demo1}
                    />
                    <video 
                        className = "ProjectPage-demos"
                        key={demo2}
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}
                        src={demo2}
                    />
                    <video 
                        className = "ProjectPage-demos"
                        key={demo3}
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}
                        src={demo3}
                    />
                </div>
                <div style = {{paddingBottom: "5vh", paddingLeft:"3vw"}}>
                    *Click and hover to play demos
                </div>

                







                
                <div className = "ProjectPage-textContainer">
                    <div style = {{flexDirection: "row", display : "flex", alignItems : "center", paddingBottom: "1vh"}}>
                    <div style = {{flexDirection:"row", display: "flex", justifyContent:"center", alignItems:"center"}}>
                            <div className = "ProjectPage-projectName" style = {{ textDecoration: "underline solid #7CFC00"}}>Swamphacks 2021</div>
                            <div className = "ProjectPage-projectName"> Rumble in the Swamp</div>
                        </div>                        <FontAwesomeIcon  className = "ProjectPage-socials" 
                        style = {{color: "lightgray", position:'absolute', right: "4vw"}}icon= {faGithub} size = '3x' onClick = {this.handleSwamphacksGH}/>
                        <FontAwesomeIcon className = "ProjectPage-socials" 
                        style = {{color: "#FF0000", position:'absolute', right: "0vw"}}icon= {faYoutube} size = '3x' onClick = {this.handleSwamphacksYT} />
                    </div>
                    <div className='ProjectPage-paragraph'>
                        Our Swamphacks Hackathon project focused on creating a Player versus Player game using React. Specifically, we chose React as our
                        main technology to get more experience with the framework, as it is so widely used in the industry today. The game focused on two 
                        gators, our school's mascot, fighting it out at my favorite library, Marston Science Library. There are a few different attacks, 
                        Q to "chomp", E to "swipe", and S to "shield", which can be seen in the demo video. We also developed a home page as well, 
                        showcasing our skillsets and how to's. To host the website, we used Firebase, and had Google Authentication for login into the website.
                        This project was one of my first experiences with React, and it taught me the basics of front-end design, as well as integrating third
                        party libraries such as Phaser 3 which we used for the game engine. The project is not hosted on firebase anymore,
                         but you can run it locally using the Github Repo, or checkout our demo video by clicking
                        on the Github / Youtube Icons.
                    </div>
                    <div style = {{flexDirection:"row"}}>
                         <div className = "ProjectPage-button-74" role="button">React.js</div>
                         <div className = "ProjectPage-button-74" role="button">Node.js</div>
                         <div className = "ProjectPage-button-74" role="button">Phaser.js</div>
                         <div className = "ProjectPage-button-74" style = {{marginTop: "2vh"}}role="button">Firebase</div>
                    </div>
                    <div style = {{flexDirection: "row", display: "flex", justifyContent: "center", paddingBottom: "5vh"}}>

                        <div className = "ProjectPage-gator"></div>
                        <div className = "ProjectPage-gatorInvert"></div>
                    </div>
                </div>
                









                <div className = "ProjectPage-textContainer">
                    <div style = {{flexDirection: "row", display : "flex", alignItems : "center", paddingBottom: "1vh"}}>
                        <div className = "ProjectPage-projectName" style = {{ textDecoration: "underline solid lightgray"}}>Computerized Economics</div>
                        <FontAwesomeIcon style = {{color: "lightgray" }}icon= {faChartLine} size = '3x' />
                        <FontAwesomeIcon  className = "ProjectPage-socials" 
                        style = {{color: "lightgray", position:'absolute', right: "4vw"}}icon= {faGithub} size = '3x' onClick = {this.handleEconomicsGH}/>
                        <FontAwesomeIcon className = "ProjectPage-socials" 
                        style = {{color: "#FF0000", position:'absolute', right: "0vw"}}icon= {faYoutube} size = '3x' onClick = {this.handleEconomicsYT} />
                    </div>
                    <div className = "ProjectPage-paragraph">
                        With the help from two friends, we created an application in C++ which allows a user to determine an estimate for
                        the quantity of goods to be produced, and the selling price for a product using three data structures, a AVL tree, B+ tree,
                        and hash-map. The idea behind our project is if a company took a survey asking for the price they would pay for a prospective
                        product, our application would allow them to determine how much of the product they should produce. If the company wanted to 
                        see how much they would need to produce at a certain price point, that would also be available. Lastly, inputting information
                        based on the supply curve equation would allow for information on if there is a surplus or shortage of products produced. All of
                        this information is found using the three data structures we used, and the time taken to complete the searches were compared for each
                        data structure. Both the B+ tree and AVL tree were implemented from scratch, and the code for said data structures 
                        can be found in the Github Repo. 
                    </div>
                    <div className = "ProjectPage-paragraph">
                        I helped implement the data structures we created, as well as worked on the front-end for our project. Because our class projects 
                        were mainly written in C++, our front-end UI was created in C++ as well, using Qt.io, which was a learning experience for me, 
                        as I was mainly familiar with React.js for front-end development. 
                    </div>
                    <div style = {{flexDirection:"row", paddingBottom: "5vh", marginTop: "2vh"}}>
                         <div className = "ProjectPage-button-74" role="button">C++</div>
                         <div className = "ProjectPage-button-74" role="button">Qt.io</div>
                         <div className = "ProjectPage-button-74" role="button">Data Structures</div>
                    </div>
                </div>






                <div className = "ProjectPage-textContainer">
                    <div style = {{flexDirection: "row", display : "flex", alignItems : "center", paddingBottom: "1vh"}}>
                        <div className = "ProjectPage-projectName" style = {{ textDecoration: "underline solid #0077b6"}}>My Website</div>
                        <FontAwesomeIcon style = {{color: "#0077b6" }}icon= {faDesktop} size = '3x' />
                        <FontAwesomeIcon  className = "ProjectPage-socials" 
                        style = {{color: "lightgray", position:'absolute', right: "2vw"}}icon= {faGithub} size = '3x' onClick = {this.handleWebsiteGH}/>
                    </div>
                    <div className = "ProjectPage-paragraph">
                        This entire website was made using React.js, and serves as a portfolio sharing myself, my accomplishments, and my interests.
                        It is still a work in progress in terms of adding new things and features.
                        Currently, the website doesn't work great on mobile, but that's the next feature I aim to add on the website.
                    </div>
                    <div style = {{flexDirection:"row", paddingBottom: "5vh", marginTop: "2vh"}}>
                         <div className = "ProjectPage-button-74" role="button">React.js</div>
                         <div className = "ProjectPage-button-74" role="button">Node.js</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

