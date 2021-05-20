import react from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../MonCbOverzicht.css';
import CbStatuscard from '../components/CbStatuscard'
//Button styling
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';




export default function MonCbOverzicht(){
    return(
        <div className="MonCbOverzicht">
            <Container>
                {/* Dashboard greeting */}
                <Row>
                    <Col xs={12} md={12} >
                        <Button color="primary" ><ArrowBackIcon/> Terug</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Cargobikes overzicht</h1>
                        <h2 className="Dashgreeting">Gebruik deze knoppen i.p.v. sleutels</h2>
                    </Col>
                </Row>

                {/* List */}
                <div className="contentbox">
                    <Row>
                        <Col xs={6} md={6} >
                            <h1 className="content">Cargobikes ontgrendelen</h1>        
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
                            <CbStatuscard nr="14" afstand="220" />
                            <CbStatuscard nr="42" afstand="899" />
                            <CbStatuscard nr="47" afstand="100" />
                            <CbStatuscard nr="23" afstand="230" />
                            <CbStatuscard nr="75" afstand="2500" />
                            <CbStatuscard nr="61" afstand="120" />
                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    )
}