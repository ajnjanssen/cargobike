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

               <Col xs={10} className="Cargobike_type_det">
                     <h1 className="Cargobike_type_title">Cargobike Standard</h1> 
                     <h2 className="Cargobike_res_date">Gereserveerd op: 03-03-2021</h2> 
               </Col>

               <Col xs={8} className="Cargobike_res_details">
                     <h1 className="Cargobike_type_title">P+R Reitdiep</h1> 
                     <h2 className="Cargobike_res_adress">Friesestraatweg 152</h2>
                     <h3 className="Cargobike_res_pak">34 pakketten</h3>  
               </Col>
               <Col xs={4} className="Cargobike_res_details">
                     <h1 className="Cargobike_type_title">Do: 01-04</h1> 
                     <h2 className="Cargobike_res_date">12:00</h2>
               </Col>

               <Col xs={8}>
                     <h1 className="Cargobike_res_wijzigen">Reservering wijzigen</h1> 
               </Col>

            </Row>
            </div>
        </Container>
        </div>
    )
}

export default OndReservering
