import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import placeholder from '../../img/Map.png';

function CurrenRoute() {
    return (
        <div>
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
        </div>
    )
}

export default CurrenRoute
