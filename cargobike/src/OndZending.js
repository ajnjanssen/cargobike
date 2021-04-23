import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import './OndZending.css';
import DashboardGreeting from './components/user/DashboardGreeting';

function OndZending() {
    return (
        <div>

            <DashboardGreeting/>

            <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="Verzending_title">Moiiii hier komt een zending</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="Verzending_title">AGENDA</h1>
                    </Col>
                </Row>


            </Container>

        </div>
    )
}

export default OndZending
