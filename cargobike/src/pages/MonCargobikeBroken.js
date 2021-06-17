// any questions about this page can be asked to Isa Winkenius

import React, { useState} from 'react';

//Styling
import styled from "styled-components";
import CargoPicturesCard from '../components/CargoPicturesCard';
import CargoLogCard from '../components/CargoLogCard';
import {Container, Row, Col } from 'react-bootstrap';
import '../MonCbOverzicht.css';
import CbStatCard from '../components/CbStatCard';
//Button styling
import { Button } from '@material-ui/core';
import GoogleMap from '../components/GoogleMap';
//icons for the page
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

var CargobikeStatus = 0;

const ButtonContainer = styled.div`
margin:16px;
text-align: right;
`
const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
    margin: 16px 16px 26px 16px;
`

function CargobikePage() {

        // this event dispatcher gives the event listner the news we want a certain navigation for this user.
        const event = new Event('showNavbarMon');
        window.dispatchEvent(event);

    return (
        <div className="MonCbOverzicht">

        <Container>
            {/* Dashboard greeting */}
            <Row style={{paddingLeft:14}}>
                <Col xs={12} md={12} className="BackButtonCargobike">
                    <a href="javascript: history.go(-1)">
                    <Button onclick="javascript: history.go(-1)"><ArrowBackIcon/> Terug</Button>
                    </a>
                </Col>
            </Row>
            <Row style={{padding: 16}}>
                <Col xs={12} md={8} >
                    <h1 className="Dashgreeting" style={{fontSize: 26}}>Nummer 12 - Reparatie</h1>
                    <h2 className="MonDashgreeting" style={{fontSize: 22}}>Standaard Cargobike - C1</h2>
                </Col>
            </Row>
            {/* List */} 
            { CargobikeStatus < 2 ? <CargoPicturesCard/> : ""}
            <div className="contentbox_light">
                <Row>
                    <Col xs={12} md={6} >
                        <h1 className="content_light">Cargobike ontgrendelen</h1>        
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} >
                        <CbStatCard nr="12" afstand="20" />
                    </Col>
                </Row>
            </div>
            <div className="position-relative">
                <img class="card-img-top Route_img" src="/static/media/Map.dda3b0da.png"></img>
                <ButtonContainer  className="position-absolute" style={{top:12, right:8}}>
                    <a href="https://maps.google.com/?q=53.2109719,6.5619039">
                        <Button className="location_button">
                            Ga naar locatie <ArrowForwardIcon/>
                        </Button>
                    </a>
                </ButtonContainer>
            </div>
            <div>
            <CargoLogCard/>
        </div>
        </Container>
        <Container>
                    <Button>
                        <ContentBox_h1> <PhoneForwardedIcon/> Bel Cargobike leverancier</ContentBox_h1>
                    </Button>
            </Container>
    </div>
    )
}

export default CargobikePage
