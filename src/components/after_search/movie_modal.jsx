import { Modal, Spinner} from 'react-bootstrap'
import React from 'react'
import './movie_style.css'

class MovieModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            load:false,
            title:'',
            year:'',
            rating:'',
            desc:'',
            link_img:'https://www.flinnsci.com/globalassets/flinn-scientific/all-product-images-rgb-jpegs/no_image_available.jpg?width=310'
        }
    }
    componentDidMount=()=>{
        fetch('http://www.omdbapi.com/?apikey=70c951e5&i='+this.props.id)
        .then(resp=>resp.json())
        .then(res=>{
            console.log(res)
            if(res.Poster!=='N/A'){
                this.setState({
                    link_img:res.Poster
                })
            }
            this.setState({
                title:res.Title,
                year:res.Year,
                rating:res.imdbRating,
                desc:res.Plot,
                load:true
            })
        })
    }
    render(){
        let {load,title,rating,year,desc,link_img}=this.state
        if(load===false){
            return (
                <div className="modal-bg" >
                    <Modal.Header className="modal-bg" closeButton>
                        <Spinner animation="border" variant="dark" />
                        <Spinner animation="border" variant="dark" />
                        <Spinner animation="border" variant="dark" />
                    </Modal.Header>
                </div>
            )
        }
        else{
            return (
                <div className="modal-bg" >
                    <Modal.Header closeButton><h2 style={{'textAlign':'center'}}>Movie Info</h2></Modal.Header>
                    <Modal.Body className="modal-bg" closeButton>
                        <div className="manage-info">   
                            <div className='left-box'>
                                <img src={link_img} className="set-image"/>
                            </div>
                            <div className="right-box">
                                <div>
                                    <span className="title-movie">Title: </span>
                                    <span>  {title}</span>
                                </div>
                                <div>
                                    <span className="title-movie">Year: </span>
                                    <span>  {year}</span>
                                </div>
                                <p className="title-movie">Ratings -:</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <br/>
                        <h6>Description</h6>
                        <p>{desc}</p>
                    </Modal.Body>
                </div>
            )
        }
    }
}

export default MovieModal