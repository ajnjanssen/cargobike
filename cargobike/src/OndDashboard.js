import React from 'react'
import './OndDashboard.css';
import { Col, Container, Row } from 'react-bootstrap'

function OndDashboard() {
    return (
        <div>
            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                        <h1 className="Header_title">Mijn bezorgingen</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Een overzicht van alle bezorgingen.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OndDashboard
