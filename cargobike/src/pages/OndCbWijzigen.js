import React from 'react';
import {useState} from 'react';
import '../OndCbWijzigen.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';

//Component import
import CBTypeDropdown from '../components/dropdown_cargobiketype';
import LocationDropdown from '../components/dropdown_location';
import DateTimePicker from '../components/DateTimePicker';

export default function OndCbWijzigen(){
    //Set userdata
    const [voornaam, setVoornaam] = useState('Voornaam')

    return(
        <div className="OndCbWijzigen">
            {/* Dashboard Greeting */}
            <Container>
                <Row style={{paddingLeft: '15px'}}>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Goedemorgen, {voornaam}!</h1>
                        <h2 className="Dashgreeting">Jouw reservering wijzigen!</h2>   
                    </Col>
                </Row>
            </Container>

            {/* Content */}
            <Container>                
                <div className="card">
                    {/* DateTime-picker */}
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className="card-partition">Moment van jouw reservering</h1>
                            <div className="datefield">
                                <DateTimePicker/>
                            </div>                   
                        </Col>
                    </Row>
                    
                    {/* Type-picker */}
                    <Row>
                        <Col xs={4} md={6}>
                            <h2 className="card-partition">Type Cargobike</h2>
                        </Col>
                        <Col xs={8} md={6}>
                            <CBTypeDropdown/>
                        </Col>
                    </Row>

                    {/* Locations-picker */}
                    <Row>
                        <Col xs={4} md={6}>
                            <h2 className="card-partition">Location</h2>
                        </Col>
                        <Col xs={8} md={6} className="dropdown">
                            <LocationDropdown/>
                        </Col>
                    </Row>
                </div>

                <div className="bottom-button">
                    <Row>
                        <Col xs={12} md={12}>
                            <Button size="large" color="primary" variant="contained">Reservering opslaan</Button>
                            <Button size="large" color="primary">Reservering annuleren</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}