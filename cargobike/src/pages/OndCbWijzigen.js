import React from 'react';
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

//Component import
import CBTypeDropdown from '../components/dropdownCargobiketype';
import LocationDropdown from '../components/dropdownLocation';
import DateTimePicker from '../components/DateTimePicker';

const OndCbWijzigenDiv = styled.div`
    padding-top: 15vh;
`

const CbwijzH2 = styled.h2`
    font-weight: 200;
    font-size: 24px;
    color: white;
`

const CbWijzContentbox = styled.div`
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    position: relative;
    text-align: left;
    padding: 2em;
    z-radius: 12;
    margin: auto;
    margin-top: 4vh;
    max-width: 750px;
`

const CbWijzBoxH1 = styled.h1`
    font-weight: 600;
    font-size: 20px;
`

const DropdownSection = styled.div`
    margin-top: 2vh;
`

const CbWijzBoxH2 = styled.h2`
    font-weight: 600;
    font-size: 16px;
    color: #838383;
    margin-top: 10px;
`

const CbWijzButtons = styled.div`
    margin-top: 5vh;
    text-align: center;
`

export default function OndCbWijzigen(){
    //Set userdata
    const [voornaam, setVoornaam] = useState('Voornaam')

    return(
        <OndCbWijzigenDiv>
            {/* Dashboard Greeting */}
            <Container>
                <Row style={{paddingLeft: '15px'}}>
                    <Col xs={12} md={12} >
                        <CbwijzH2>Jouw cargobike reservering wijzigen</CbwijzH2>   
                    </Col>
                </Row>
            </Container>

            {/* Content */}
            <Container>                
                <CbWijzContentbox>
                    {/* DateTime-picker */}
                    <Row>
                        <Col xs={12} md={12}>
                            <CbWijzBoxH1>Moment van jouw cargobike reservering</CbWijzBoxH1>
                        </Col>
                    </Row>
                    <Row>
                        <DateTimePicker/>
                    </Row>
                    <DropdownSection>
                        {/* Type-picker */}
                        <Row>
                            <Col xs={6} md={6}>
                                <CbWijzBoxH2>Type Cargobike</CbWijzBoxH2>
                            </Col>
                            <Col md={6} style={{marginLeft: '-7px'}}>
                                <CBTypeDropdown/>
                            </Col>
                        </Row>

                        {/* Locations-picker */}
                        <Row>
                            <Col xs={6} md={6}>
                                <CbWijzBoxH2>Location</CbWijzBoxH2>
                            </Col>
                            <Col md={6} style={{marginLeft: '-7px'}}>
                                <LocationDropdown/>
                            </Col>
                        </Row>
                    </DropdownSection>
                </CbWijzContentbox>

                <CbWijzButtons>
                    <Row>
                        <Col xs={12} md={12}>
                            <Button size="large" color="primary" variant="contained">Reservering opslaan</Button>
                            <Button size="large" color="primary">Reservering annuleren</Button>
                        </Col>
                    </Row>
                </CbWijzButtons>
            </Container>
        </OndCbWijzigenDiv>
    )
}