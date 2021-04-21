import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsDot } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import { MdDelete } from 'react-icons/md';
import placeholder from './img/Map.png';

import './OndReservering.css';
import './BezDashboard.css';

function BezDashboard() {
    return (
        <div>
            
            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                        <h1 className="Header_title">Goedemorgen $username!</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Laten we iets bezorgen</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc"><b>Recente activiteit</b></h1>
                        <Row>
                        <IconContext.Provider value={{ color: "#ffffff", className: "Delete_icon", size: "2em" }}>
                            {/* for loop alle recente pakketten gebruiker */}
                            <BsDot />
                            <small class="text-muted">Cargobikes gereserveerd voor [datum], [tijd], [locatie], [x pakketten]</small>
                            </IconContext.Provider>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Container>
             <div className="Card_route box">
            <Row>

             <Col xs={10}>
                     <h1 className="Card_title">Actuele route</h1> 
               </Col>

               <Col xs={7} className="Cargobike_res_details">
                     <h1>P+R Reitdiep</h1> 
                     <h2>Friesestraatweg 152</h2>
                     <h3>34 pakketten</h3>  
               </Col>
               <Col xs={5} className="Cargobike_res_details">
                     <h2><b>12 minuten</b></h2>
               </Col>

               <Card.Img variant="top" src={placeholder}  className="Route_img"/>

               <Col xs={8} className="Res_wijzigen">
                     <h3>Reservering wijzigen</h3> 
               </Col>

            </Row>
            </div>
        </Container>

        <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="Bezorging_title">Ontdek jou werkdag</h1>
                    </Col>
                </Row>
            </Container>


        <Container>
             <div className="Card_agenda box">
            <Row>

             <Col xs={10}>
                     <h1 className="Card_title">Agenda</h1> 
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h4>Dinsdag 30-03-25 - 11:15</h4> 
                     <h1>Route P+R Meerstad</h1>
                     <h2>26 pakketten</h2>  
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h4>Dinsdag 30-03-25 - 11:15</h4> 
                     <h1>Route P+R Meerstad</h1>
                     <h2>26 pakketten</h2>  
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h4>Dinsdag 30-03-25 - 11:15</h4> 
                     <h1>Route P+R Meerstad</h1>
                     <h2>26 pakketten</h2>  
               </Col>

               <Col xs={8}>
                     <h3>Alle tijden bekijken</h3> 
               </Col>

            </Row>
            </div>
        </Container>



        </div>
    )
}

export default BezDashboard
