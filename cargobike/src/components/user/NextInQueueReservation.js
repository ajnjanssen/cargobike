import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'



function NextInQueueReservation() {

    return (
        <div>
            <Container>
             <div className="Card_bezorgingen box">
            <Row>

             <Col xs={10}>
                     <h1 className="Card_title">Actuele reserveringen</h1> 
               </Col>
               <Col xs={2}>
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h1>P+R Reitdiep</h1> 
                     <h2>Friesestraatweg 152</h2>
                     <h4>34 pakketten - Cargobike Standard</h4>  
               </Col>
               <Col xs={4} className="Cargobike_res_details">
                     <h2>52 minuten</h2>
               </Col>

                  <Col xs={8} className="Cargobike_res_details">
                     <h1>P+R Meerstad</h1> 
                     <h2>Driebondsweg 65</h2>
                     <h4>26 pakketten - Cargobike Premium</h4>  
               </Col>
               <Col xs={4} className="Cargobike_res_details">
                     <h2>2 dagen</h2>
               </Col>

               <Col xs={8}>
                     <strong><h4>Reservering annuleren *PIJLTJE ICOON*</h4></strong>
               </Col>

            </Row>
            </div>
        </Container>
        </div>
    )
}

export default NextInQueueReservation
