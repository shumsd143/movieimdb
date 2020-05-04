import React from 'react'
import { Card,Modal } from 'react-bootstrap'
import './movie_style.css'
import MovieModal from './movie_modal'

class Eachmovie extends React.Component{
    constructor(props){
        super(props)
        //console.log(this.props.image)
        let image_url=this.props.image
        if(image_url==='N/A'){
            image_url="https://www.flinnsci.com/globalassets/flinn-scientific/all-product-images-rgb-jpegs/no_image_available.jpg?width=310"
        }
        this.state={
            image:image_url,
            show:false
        }
    }
    closemodal=()=>{
        this.setState({
            show:false
        })
    }
    openmodal=(e)=>{
        this.setState({
            show:true
        })
        e.preventDefault()
    }
    render(){
        let {show} =this.state
        return (
            <div className='child'>
                <button onClick={this.openmodal} className="button-card">
                    <Card style={{ width: '18rem' }} className="card-adjust" >
                        <Card.Img onClick={this.openmodal} variant="top" src={this.state.image} className="image-adjust"/>
                        <Card.Body>
                        <Card.Title style={{ color: 'white' }}>{this.props.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </button>
                <Modal className="modal-style" show={show} onHide={this.closemodal} >
                    <MovieModal closer={this.closemodal} id={this.props.id}></MovieModal>
                </Modal>
            </div>
        )
    }
}

export default Eachmovie