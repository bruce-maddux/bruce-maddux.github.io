import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import "./PopUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import wasd from '../photos/WASD.png'
import qKey from '../photos/Q.png'
import eKey from '../photos/E.png'
class PopUp extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <FontAwesomeIcon className = "PopUp-icon" icon= {faQuestionCircle} size = '6x' onClick = {()=> this.handleModalShowHide()} />
                <Modal show={this.state.showHide}
                      centered
                      >
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title >Gator Controls</Modal.Title>
                    </Modal.Header>
                    <div style = {{display: "flex", flexDirection: "column", justifyContent:"center"}}>
                        <Modal.Body>Use the keys WASD to control the gator!</Modal.Body>
                        <img style = {{width: "10vw", alignSelf:"center"}} src= {wasd} alt = "WASD"/>
                        <Modal.Body> Hold "Q" to chomp, and "E" to swipe!</Modal.Body>
                        <div style = {{display: "flex", flexDirection:"row", alignSelf:"center", paddingTop: "2vh"}}>
                            <img style = {{width: "3vw", flex: 1}} src = {qKey} alt = "Q"/>
                            <div style = {{paddingLeft: "3vw", paddingRight:"3vw"}}></div>
                            <img style = {{width: "3vw", flex : 2}} src = {eKey} alt = "E"/>
                        </div>
                        <div style = {{flexDirection: "row", alignSelf:"center", display: "flex", paddingBottom: "2vh"}}>
                            <div className = "PopUp-gatorCronch"></div>
                            <div className = "PopUp-gatorSwipe"></div>
                        </div>
                        
                    </div>
                   
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default PopUp;