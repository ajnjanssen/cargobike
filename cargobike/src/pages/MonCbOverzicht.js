import react from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../MonCbOverzicht.css';
import CbStatuscard from '../components/CbStatuscard'

export default function MonCbOverzicht(){
    return(
        <div className="MonCbOverzicht">
            <Container>
                {/* Dashboard greeting */}
                <Row>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Cargobikes overzicht</h1>
                        <h2 className="Dashgreeting">Gebruik deze knoppen i.p.v. sleutels</h2>
                    </Col>
                </Row>

                {/* List */}
                <div className="contentbox">
                    <Row>
                        <Col xs={12} md={8} >
                            <h1 className="content">Cargobikes ontgrendelen</h1>
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