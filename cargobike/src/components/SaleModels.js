import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import placeholder from '../img/Placeholder.png';

function SaleModels() {
    return (
        <div>
            <Container>

<Row>

<Card style={{ width: '22rem' }} className="Cargobike_box box">
    <Card.Body>
    <h1 className="Cargobike_title">Cargobike</h1> 
    <h2>Standaard</h2> 

    <Row className="Cargobike_spec_box">
        <Col className="Cargo_specs">
        <h2 className="Cargo_spec_text">Radius</h2>
        <h3 className="Cargo_spec_det">40 kilometer</h3>
        </Col>
        <Col className="Cargo_specs">
        <h2 className="Cargo_spec_text">Capaciteit</h2>
        <h3 className="Cargo_spec_det">120 liter</h3>
        </Col>
    </Row>

    </Card.Body>
    <Card.Img variant="top" src={placeholder} />
</Card>

<Card style={{ width: '22rem' }} className="Cargobike_box box">
    <Card.Body>
    <h1 className="Cargobike_title">Cargobike</h1> 
    <h2>Standaard</h2> 

    <Row className="Cargobike_spec_box">
        <Col className="Cargo_specs">
        <h2 className="Cargo_spec_text">Radius</h2>
        <h3 className="Cargo_spec_det">40 kilometer</h3>
        </Col>
        <Col className="Cargo_specs">
        <h2 className="Cargo_spec_text">Capaciteit</h2>
        <h3 className="Cargo_spec_det">120 liter</h3>
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

export default SaleModels
