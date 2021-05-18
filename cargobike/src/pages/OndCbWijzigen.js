import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//Textfield used in Input
import { Input, Button, Textfield, Select } from '@material-ui/core';
import '../OndCbWijzigen.css';



export default function OndCbWijzigen(){
    return(
        <div className="OndCbWijzigen">
            {/* Dashboard Greeting */}
            <Container>
                <Row style={{paddingLeft: '15px'}}>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Goedemorgen Naamloos!</h1>
                        <h2 className="Dashgreeting">Jouw reservering wijzigen!</h2>   
                    </Col>
                </Row>
            </Container>

            {/* Content */}
            <Container>                
                <div className="card">
                    <Row className="card-partition">
                        <Col xs={12} md={8}>
                            <h1>Datum van jouw reservering</h1>
                            <Input></Input>                           
                        </Col>
                    </Row>
                    <Row className="card-partition">
                        <Col xs={8} md={6}>
                            <h1 className="card-partition"> Type Cargobike</h1>
                            <h1 className="card-partition">Locatie</h1>
                        </Col>
                        <Col xs={8} md={6}>
                            <Select children="This"/>
                            <h1 className="card-partition">asdksadoi</h1>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Button>Reservering opslaan</Button>
                        
                    <Col xs={12} md={8}>
                        <Button>Reservering annuleren</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}