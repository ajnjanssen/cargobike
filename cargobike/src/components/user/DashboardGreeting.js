import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

function DashboardGreeting() {
    return (
        <div>
            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                        <h1 className="Header_title">Goedemorgen $username!</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Laten we iets verzenden</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc"><b>Recente activiteit</b></h1>
                        <Row>
                        <IconContext.Provider value={{ color: "#ffffff", className: "Delete_icon", size: "2em" }}>
                            {/* for loop alle recente pakketten gebruiker */}
                            <BsDot />
                            <small class="text-muted">Cargobikes gereserveerd voor [datum], [tijd], [locatie], [x pakketten]</small>
                            </IconContext.Provider>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardGreeting
