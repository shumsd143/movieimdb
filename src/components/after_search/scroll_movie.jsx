import React from 'react'
import './movie_style.css'
import Eachmovie from './each_movie'
import { Spinner, Alert } from "react-bootstrap";

class ScrollMovie extends React.Component{
    constructor(props){
        super(props)
        let showing=this.props.wholecomp.data.Search.length
        let validation=false
        if(showing<10){
            validation=true
        }
        this.state={
            ...this.props.wholecomp,
            page:2,
            showdata:this.props.wholecomp.data.Search,
            spinner:'spin-hide',
            moredata:validation
        }
        
    }
    fetcher=()=>{
        fetch('https://www.omdbapi.com/?apikey=70c951e5&'+this.state.search_by+'='+this.state.search_data+'&y='+this.state.search_year+'&type='+this.state.category+'&page='+this.state.page)
        .then(res=>res.json())
        .then(data=>{
            if(data.Response==='True'){
                let wholedata=data.Search.concat(this.state.showdata)
                if(data.Search.length<10){
                    this.setState({
                        load:true,
                        showdata:wholedata,
                        spinner:'spin-hide',
                        moredata:true
                    })
                }
                else{
                    this.setState({
                        load:true,
                        showdata:wholedata,
                        spinner:'spin-hide',
                        page:this.state.page+1
                    })
                }
            }
            else{
                this.setState({
                    load:true,
                    spinner:'spin-hide',
                    moredata:true
                })
            }
        })
    }
    handleScroll = (e) => { 
        let scrollable=document.documentElement.scrollHeight-window.innerHeight
        let scrolled=window.scrollY
        if(Math.ceil(scrolled)+5>scrollable){
            if(this.state.load===true && this.state.moredata===false){
                this.setState({
                    load:false,
                    spinner:'spin-show'
                })
                this.fetcher()
            }
        }
    };
    componentWillMount=()=>{
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
    }
    render(){
        //console.log(this.state)
        return (
            <div>
                <div className='head'>
                    {this.state.showdata.map(el=>
                        <Eachmovie id={el.imdbID} title={el.Title} image={el.Poster}/>
                    )}
                </div>
                <div className={this.state.spinner}>
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="light" />
                </div>
                <div>
                    <Alert variant="danger" show={this.state.moredata} className="error-data">No more data to show</Alert>
                </div>
            </div>
        )
    }
}

export default ScrollMovie