import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import placeholder from '../../img/Map.png';
import { db } from '../firebase/Firebase';

function CurrenRoute() {

    const [ondernemerActualRouteData,
        setOndernemerActualRouteData] = useState([]);
    useEffect(() => {
        db
            .collection('ondernemers').doc('actualRoute')
            .onSnapshot(snapshot => {
                setOndernemerActualRouteData(snapshot.docs.map(doc => ({
                    id: doc.id,
                    ondernemer: doc.data()
                })));
            })
    }, []);
    return (
        <div>
            <Container>
                <div className="Card_route box">
                    <Row>

                        <Col xs={10}>
                            <h1 className="Card_title">Actuele route</h1>
                            <p> {ondernemerActualRouteData.amountPackets}</p>
                        </Col>

                        <Card.Img variant="top" src={placeholder} className="Route_img"/>

                        <Col xs={8} className="Res_wijzigen">
                            <h3>Reservering wijzigen</h3>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default CurrenRoute
