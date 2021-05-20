import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OndDashboard.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import background from './img/header_bg.svg';
import logo from './img/logo_cargobike.png';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


function Header() {
    return (
        <div className="Header">
         <div className="Header_bg" style={{ backgroundImage: `url(${background})` }}>
            <Container>
             <Row>
                 <Col xs={6}>
                    <div class="d-flex justify-content-end">
                    <img src={logo} alt="" className="Header_logo"/>
                    </div>
                 </Col>
                 <Col>
                 <div class="d-flex justify-content-end">
                  <IconContext.Provider value={{ color: "white", className: "Info_icon", size: "2em" }}>
                      <AiOutlineInfoCircle />
                     </IconContext.Provider>
                     </div>
                 </Col>
                </Row>
          </Container>

         </div>
     </div>
    )
}

export default Header
