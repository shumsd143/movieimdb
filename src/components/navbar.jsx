import React from 'react'
import { Navbar } from "react-bootstrap";

class Navbars extends React.Component{
    render(){
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src="http://www.userlogos.org/files/logos/2690_fernandosantucci/imdb.new_.logo_.png?1415113156"
                            width="120"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Navbars