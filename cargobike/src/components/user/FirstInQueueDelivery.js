import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { MdDelete } from 'react-icons/md'

function FirstInQueueDelivery() {
    return (
        <div>
             <Container>
             <div className="Card_First_Delivery box">
            <Row>

             <Col xs={10}>
                     <h1 className="Card_title">Volgende bezorging</h1> 
               </Col>
               <Col xs={2}>
                <IconContext.Provider value={{ color: "#838383", className: "Delete_icon", size: "2em" }}>
                      <MdDelete />
                     </IconContext.Provider>
               </Col>

               <Col xs={10} className="Cargobike_type_det">
                     <h1>Cargobike Standaard</h1> 
                     <h2>Gereserveerd op: 03-03-2021</h2> 
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h1>P+R Reitdiep</h1> 
                     <h2>Friesestraatweg 152</h2>
                     <h3>34 pakketten</h3>  
               </Col>
               <Col xs={4} className="Cargobike_res_details">
                     <h1>Do: 01-04</h1> 
                     <h2>12:00</h2>
               </Col>

               <Col xs={8}>
                     <h3>Reservering wijzigen</h3> 
               </Col>

            </Row>
            </div>
        </Container>
        </div>
    )
}

export default FirstInQueueDelivery
