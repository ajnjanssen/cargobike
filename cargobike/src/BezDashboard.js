import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import './OndReservering.css';
import './BezDashboard.css';
import DashboardGreeting from './components/user/DashboardGreeting';
import CurrentAgenda from './components/employee/CurrentAgenda';
import CurrentRoute from './components/CurrentRoute';
import SaleModels from './components/SaleModels';

//Styling
import styled from "styled-components";


//Components
import GoogleMap from './components/GoogleMap';
import CbStatCard from './components/CbStatCard';
import OnderdeelStatus from './components/OnderdeelStatus';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Scrollbar = styled.div`
display: flex;
overflow-x: scroll;
`

const Scrollbar_item = styled.div`
    margin: 20px;
`


const Contentbox = styled.div`
    margin-top: 5vh;
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
`

const ContentBox_p = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 14;
    margin: 0;
    padding: 0;
`

const ContentBottom = styled.div`
    margin-top: 5vh;
    background-color: white;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    color: black;
`

const ButtonContainer = styled.div`
    margin: 3%;
    float: right;
`


function BezDashboard() {
    return (
        <div className='bezDashboard'>

            <DashboardGreeting/>

            {/* Card met Actuele route */}
             <CurrentRoute />

            <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="BezorgerTitles">Ontdek jouw werkdag</h1>
                    </Col>
                </Row>
            </Container>


            <Scrollbar>
                <Scrollbar_item>        
                    <div className="Card_agenda box">
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title">Agenda</h1>
                            </Col>

                            {/* For loop schrijven voor actuele data van bezorger */}
                            <CurrentAgenda/>

                            <Col xs={8}>
                                <h3>Alle tijden bekijken</h3>
                            </Col>
                        </Row>
                    </div>
                </Scrollbar_item>

                <Scrollbar_item>        
                    <div className="Card_agenda box">
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title">Mijn Cargobike</h1>
                            </Col>

                            {/* For loop schrijven voor actuele data van bezorger */}
                            <CurrentAgenda/>

                            <Col xs={8}>
                                <h3>Alle tijden bekijken</h3>
                            </Col>
                        </Row>
                    </div>
                </Scrollbar_item>

            </Scrollbar>
            

        </div>
    )
}

export default BezDashboard
