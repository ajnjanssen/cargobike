import React from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsDot } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import { AiOutlineArrowRight } from 'react-icons/ai';

import placeholder from './img/Placeholder.png';

// css apart maken voor dit component
import './OndReservering.css';
import { Button } from 'react-bootstrap';

function OndDashboard() {
    return (
        <div>
            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                        <h1 className="Header_title">Goedemorgen $username!</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Laten we iets verzenden</h1>
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
             <div className="Card_First_Delivery box">
            <Row>

             <Col xs={10}>
                     <h1 className="Card_title">Actuele bezorgingen</h1> 
               </Col>
            

                {/* for loop maken voor actuele bezorgingen */}
               <Col xs={8} className="Cargobike_res_details">
                     <h1>P+R Reitdiep</h1> 
                     <h2>Friesestraatweg 152</h2>
                     <h3>34 pakketten - Cargobike Standard</h3>  
               </Col>
               <Col xs={4} className="Cargobike_res_details">
                     {/* <h1>Do: 01-04</h1>  */}
                     <h2>52 minuten</h2>
               </Col>

               <Col xs={4}>
                    <div className="wijzigen">
                     <h3>Reservering wijzigen</h3> 
                     <AiOutlineArrowRight />
                     </div>
               </Col>

            </Row>
            </div>
        </Container>
            


<Container>

    <Row>

    <Card style={{ width: '22rem' }} className="Cargobike_box box">
        <Card.Body>
        <h1 className="Cargobike_title">Cargobike</h1> 
        <h2>Standard</h2> 

        <Row className="Cargobike_spec_box">
            <Col className="Cargo_specs">
            <h2 className="Cargo_spec_text">Radius</h2>
            <h3 className="Cargo_spec_det">40 Kilometer</h3>
            </Col>
            <Col className="Cargo_specs">
            <h2 className="Cargo_spec_text">Capaciteit</h2>
            <h3 className="Cargo_spec_det">120 Liter</h3>
            </Col>
        </Row>

        </Card.Body>
        <Card.Img variant="top" src={placeholder} />
    </Card>

    <Card style={{ width: '22rem' }} className="Cargobike_box box">
        <Card.Body>
        <h1 className="Cargobike_title">Cargobike</h1> 
        <h2>Standard</h2> 

        <Row className="Cargobike_spec_box">
            <Col className="Cargo_specs">
            <h2 className="Cargo_spec_text">Radius</h2>
            <h3 className="Cargo_spec_det">40 Kilometer</h3>
            </Col>
            <Col className="Cargo_specs">
            <h2 className="Cargo_spec_text">Capaciteit</h2>
            <h3 className="Cargo_spec_det">120 Liter</h3>
            </Col>
        </Row>

        </Card.Body>
        <Card.Img variant="top" src={placeholder} />
    </Card>
    
    </Row>

</Container>




            </div>

            
    )
}

export default OndDashboard
