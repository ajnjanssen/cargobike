import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import placeholder from '../img/Placeholder.png';

import bike from '../img/bike.jfif';
import styled from 'styled-components'

function SaleModels() {
    return (
        <div>
            <Container>
<HeaderTitle>Huur een cargobike</HeaderTitle>
<Row style={{paddingLeft:'20px'}}>
    <ScrollingWrapper>

        <Card style={{ width: '22rem', display: 'inline-block' }} className="Cargobike_box box">
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
            <Card.Img variant="top" src={bike} />
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
            <Card.Img variant="top" src={bike} />
        </Card>
    </ScrollingWrapper>
</Row>

</Container>


        </div>
    )
}

export default SaleModels

const ScrollingWrapper = styled.div`
    display: flex;
  flex-wrap: nowrap;
  width:600px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`

const HeaderTitle = styled.div`
margin-top:30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 30px;
    margin-left:25px;
    color:grey;
    /* color: white; */
`