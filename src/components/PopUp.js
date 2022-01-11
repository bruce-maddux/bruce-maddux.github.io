import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import "./PopUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

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
                    <Modal.Title>Gator Controls</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Use the keys WASD to control the gator</Modal.Body>
                    <img className = "PopUp-image" src="/assets/keyboard.JPG" alt="image" />
                    <Modal.Body> and hold "Q" to chomp, and "E" to swipe!</Modal.Body>
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