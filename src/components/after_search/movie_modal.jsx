import { Modal, Spinner} from 'react-bootstrap'
import React from 'react'
import './movie_style.css'

class MovieModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            load:false
        }
    }
    componentDidMount=()=>{

    }
    render(){
        let {load}=this.state
        if(load===false){
            return (
                <div className="modal-bg" >
                    <Modal.Header className="modal-bg" closeButton>
                    </Modal.Header>
                    <Modal.Body className="modal-bg">
                        <Spinner animation="border" variant="dark" />
                        <Spinner animation="border" variant="dark" />
                        <Spinner animation="border" variant="dark" />
                    </Modal.Body>
                </div>
            )
        }
        else{
            return (
                <div className="modal-bg" >
                    <Modal.Header className="modal-bg" closeButton>
                    </Modal.Header>
                    <Modal.Body className="modal-bg" closeButton>
                    </Modal.Body>
                </div>
            )
        }
    }
}

export default MovieModal