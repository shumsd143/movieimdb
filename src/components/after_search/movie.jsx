import React from 'react'
import Eachmovie from './each_movie'
import './movie_style.css'
import {connect} from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'
import ScrollMovie from './scroll_movie'

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            load:false,
            search_by:this.props.search_type,
            search_data:this.props.search_value,
            search_year:this.props.year,
            category:this.props.typei,
            data:[],
            response:"false"
        }
    }
    fetcher=()=>{
        fetch('https://www.omdbapi.com/?apikey=70c951e5&'+this.props.search_type+'='+this.props.search_value+'&y='+this.props.year+'&type='+this.props.typei+'&page=1')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                load:true,
                data:data,
                response:data.Response
            })
        })
    }
    updateprops=()=>{
        this.setState({
            load:false,
            search_by:this.props.search_type,
            search_data:this.props.search_value,
            search_year:this.props.year,
            category:this.props.typei,
            data:[],
            response:"false"
        })
        this.fetcher();
    }
    componentDidMount(){
        this.fetcher()
    }
    render(){
        let {load,data,search_by,search_data,search_year,category,response}=this.state
        if(this.props.search_type!==search_by||this.props.search_value!==search_data||this.props.year!==search_year||this.props.typei!==category){
            this.updateprops()
        }
        if(load===false){
            return (  
            <div>
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="light" />
            </div>
            )
        }
        else if(response==="False"){
            return (
                <Alert className="error-data" variant="danger">{data.Error}</Alert>
            )
        }
        else if(this.props.search_type==='i'){
            return (
                <div className='head'>
                    <Eachmovie id={data.imdbID} title={data.Title} image={data.Poster}/>
                </div>
            )
        }
        else{
            return (
                <ScrollMovie wholecomp={this.state}/>
            )
        }
    }
}
const mapStateToprops = (state)=>{
    return {
        search_value:state.search_value,
        search_type:state.search_by,
        year:state.date,
        typei:state.type
    }
}

export default connect(mapStateToprops)(Movie)