import React from 'react'
import Navbars from './navbar'
import { Form,Dropdown,DropdownButton, Col } from "react-bootstrap";
import './main.css'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search_value:"",
            search_by:"Title",
            search_by_value:"s",
            date:"",
            type:"Type",
            type_value:''
        }
    }
    search_by_value=(event)=>{
        event.preventDefault()
        if(event.target.value==='Title'){
            this.setState({
                search_by:event.target.value,
                search_by_value:'s'
            })
        }
        else{
            this.setState({
                search_by:event.target.value,
                search_by_value:'i'
            })
        }
    }
    search_by_type=(event)=>{
        event.preventDefault()
        this.setState({
            type:event.target.value,
            type_value:event.target.value
        })
    }
    search_change=(event)=>{
        this.setState({
            search_value:event.target.value
        })
    }
    date_change=(event)=>{
        this.setState({
            date:event.target.value
        })
    }
    submitform=(event)=>{
        this.props.changevalue(this.state.search_by_value,this.state.search_value,this.state.date,this.state.type_value)
    }

    render(){
        let {search_by,search_value,date,type}=this.state
        return (
            <div>
                <Navbars/>
                <div className="search-head">
                    <Form >
                        <Form.Row>
                            <Form.Group className="search-drop">
                                <DropdownButton title={search_by} variant="secondary">
                                    <Dropdown.Item as="button" value="Title" onClick={this.search_by_value}>Title</Dropdown.Item>
                                    <Dropdown.Item as="button" value="ID" onClick={this.search_by_value}>ID</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                            <Form.Group as={Col} className="search-text">
                                <Form.Control type="text" value={search_value} placeholder="Search" name="Search" onChange={this.search_change}/>
                            </Form.Group>
                            <Form.Group as={Col} className="search-year">
                                <Form.Control type="number" min="1990" value={date} max="2020" maxLength="4" placeholder="Year" name="Year" onChange={this.date_change}/>
                            </Form.Group>
                            <Form.Group className="search-type">
                                <DropdownButton title={type} variant="secondary">
                                    <Dropdown.Item as="button" value="Movie" onClick={this.search_by_type}>Movie</Dropdown.Item>
                                    <Dropdown.Item as="button" value="Series" onClick={this.search_by_type}>Series</Dropdown.Item>
                                    <Dropdown.Item as="button" value="Episode" onClick={this.search_by_type}>Episode</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form.Row>
                        <Link to="/movies"><button className="search-button" onClick={this.submitform}>Search</button></Link>
                    </Form>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changevalue:(search_by,searchvalue,year,typei)=>{dispatch({type:'import',search_by:search_by,searchvalue:searchvalue,year:year,type_:typei})}
    }
}

export default connect(null,mapDispatchToProps)(Main)