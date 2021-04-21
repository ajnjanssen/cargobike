import React from 'react'
import './OndReservering.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FirstInQueueDelivery from './components/user/FirstInQueueDelivery';
import NextInQueueDelivery from './components/user/NextInQueueDelivery';

function OndReservering() {
    return (
        <div className="ondReservering">

            {/* Dit component kan vervangen worden door 
            src/components/user/DashboardGreeting.js */}

            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet">
                        <h1 className="Header_title">Mijn bezorgingen</h1>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Een overzicht van alle bezorgingen.</h1>
                    </Col>
                </Row>
            </Container>

            {/* For Loop voor eeerste bezorging gekoppeld aan user */}
            <FirstInQueueDelivery />

            <Container className="Title_dash">
            <Row>
                  <Col xs={12} md={8}>
                        <h1 className="Bezorging_title">Al uw gemaakte bezorgingen</h1>
                  </Col>
            </Row>
      </Container>

            {/* For Loop voor alle bezorgingen gekoppeld aan user */}
            <NextInQueueDelivery />
            <NextInQueueDelivery />
            <NextInQueueDelivery />
            <NextInQueueDelivery />

 
        </div>
    )
}

export default OndReservering
