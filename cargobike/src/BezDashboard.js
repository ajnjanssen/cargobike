import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import './OndReservering.css';
import './BezDashboard.css';
import DashboardGreeting from './components/user/DashboardGreeting';
import CurrenRoute from './components/employee/CurrenRoute';
import CurrentAgenda from './components/employee/CurrentAgenda';

function BezDashboard() {
    return (
        <div className='bezDashboard'>

            <DashboardGreeting/>

            <CurrenRoute/>

            <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="Bezorging_title">Ontdek jouw werkdag</h1>
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
