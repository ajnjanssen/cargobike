import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineArrowRight } from 'react-icons/ai'

function CurrentRoute() {
    return (
        <div>
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
        </div>
    )
}

export default CurrentRoute
