import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import './OndZending.css';
import DashboardGreeting from './components/user/DashboardGreeting';
import NextInQueueReservation from './components/user/NextInQueueReservation';
import SaleModels from './components/SaleModels';



function OndZending() {
    return (
        <div>

            <DashboardGreeting/>

            <Container className="Title_dash WindowDelivery">
            {/* For Loop voor eeerste bezorging gekoppeld aan user */}

            <Row>
                <Col xs={12} md={8}>
                    <NextInQueueReservation />
                </Col>
            </Row>
            </Container>

            <Container className="Title_dash">

            <Col xs={10}>
                 <h1 className="Card_title cargos">Ontdek al onze Cargobike modellen</h1>
            </Col>

            {/* Cards met Cargobike modellen*/}
            <Col xs={10}>
            <SaleModels />
            </Col>

            {/* Volgens mij was er nog geen class voor de paarse knop? */}
            <button>Reserveren</button>
             </Container>
        </div>
    )
}

export default OndZending
