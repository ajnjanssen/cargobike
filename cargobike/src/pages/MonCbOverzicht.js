import react from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../MonCbOverzicht.css';
import CbStatCard from '../components/CbStatCard';
//Button styling
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function MonCbOverzicht(){

        // this event dispatcher gives the event listner the news we want a certain navigation for this user.
        const event = new Event('showNavbarMon');
        window.dispatchEvent(event);

    return(
        <div className="MonCbOverzicht">
            <Container>
                {/* Dashboard greeting */}
                <Row>
                    <Col xs={12} md={12} >
                        <Link to="/MonDashboard">
                            <Button style={{color: 'white'}} ><ArrowBackIcon/> Terug</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Cargobikes overzicht</h1>
                        <h2 className="Dashgreeting">Alle cargobikes in Groningen</h2>
                    </Col>
                </Row>

                {/* List */}
                <div className="contentbox">
                    <Row>
                        <Col xs={12} md={12} >
                            <h2 className="content">Hieronder ziet u een overzicht van alle aanwezige cargobikes in Groningen, wat hun status is en wat de afstand is tot uw vestiging.</h2>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} md={3} className="cb_locked">
                            <h1>Op slot</h1>
                            <p>12</p>
                                  
                        </Col>
                        <Col xs={3} md={3} className="cb_open">
                            <h1>Open</h1>
                            <p>8</p>
                        </Col>
                        <Col xs={3} md={3} className="cb_unavailable">
                            <h1>Niet beschikbaar</h1>
                            <p>1</p>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12} md={12} >
                            <CbStatCard nr="14" afstand="220" />
                            <CbStatCard nr="42" afstand="899" />
                            <CbStatCard nr="47" afstand="100" />
                            <CbStatCard nr="23" afstand="230" />
                            <CbStatCard nr="75" afstand="2500" />
                            <CbStatCard nr="61" afstand="120" />
                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    )
}