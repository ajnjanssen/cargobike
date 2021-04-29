import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {BsDot} from 'react-icons/bs'
import {IconContext} from 'react-icons/lib'
import {db} from '../firebase/Firebase'
import { auth } from "../firebase/Firebase";

function DashboardGreeting() {
    const [achternaam,
        setAchternaam] = useState();
    const [adres,
        setAdres] = useState();
    const email = '';
    const kvk = '';
    const voornaam = '';
    const wachtwoord = '';

    const [ondernemers,
        setOndernemers] = useState([]);
    useEffect(() => {
        db
            .collection('ondernemers')
            .onSnapshot(snapshot => {
                setOndernemers(snapshot.docs.map(doc => ({
                    id: doc.id,
                    ondernemer: doc.data()
                    })
                ));
            })
    }, []);

    const [reserveringen,
        setReserveringen] = useState([]);
    useEffect(() => {
        db
            .collection('reserveringen')
            .onSnapshot(snapshot => {
                setReserveringen(snapshot.docs.map(doc => ({
                    id: doc.id,
                    reservering: doc.data()
                })));
            })
    }, []);

    return (

        <div>
            <Container className="DasboardGreeting">
                <Row>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>

                        {ondernemers.map(({id, ondernemer}) => (
                            <h1 className="Header_title">Goedemorgen {ondernemer.voornaam}
                            </h1>

                        ))
}

                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Laten we iets verzenden</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">
                            <b>Recente activiteit</b>
                        </h1>
                        <Row>
                            <IconContext.Provider
                                value={{
                                color: "#ffffff",
                                className: "Delete_icon",
                                size: "2em"
                            }}>
                                {/* for loop alle recente pakketten gebruiker */}
                                {/* <BsDot/> */}
                                <ul>
                                    <li>

                                        {reserveringen.map(({id, reservering}) => (
                                            <small class="text-muted">Cargobikes gereserveerd voor {reservering.datum}, {reservering.tijd}, {reservering.locatie}, {reservering.pakketten}</small>
                                        ))}
                                    </li>
                                </ul>
                            </IconContext.Provider>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardGreeting
