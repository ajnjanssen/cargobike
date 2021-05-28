import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import './OndReservering.css';
import './BezDashboard.css';
import DashboardGreeting from './components/user/DashboardGreeting';
import CurrentAgenda from './components/employee/CurrentAgenda';
import CurrentRoute from './components/CurrentRoute';

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

            <Container>
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
            </Container>

        </div>
    )
}

export default BezDashboard
