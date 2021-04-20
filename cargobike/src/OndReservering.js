import React from 'react'
import './OndReservering.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IconContext } from 'react-icons/lib';
import { MdDelete } from "react-icons/md";

function OndReservering() {
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
            </Row>
            </div>
        </Container>
        </div>
    )
}

export default OndReservering
