
import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import placeholder from '../img/Map.png';
import {db} from './firebase/Firebase'
import styled from "styled-components";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const CondP = styled.p`
    font-size: 16px;
    color: #88C053;
    font-weight: 200;
    padding-top: 1em;
`

function MonteurRoute() {

 
    const [routes,
        setRoutes] = useState([]);
    useEffect(() => {
        db
            .collection('routes')
            .onSnapshot(snapshot => {
                setRoutes(snapshot.docs.map(doc => ({
                    id: doc.id,
                    route: doc.data()
                })));
            })
    }, []);

    return (

        <div>
            {routes.map(({id, route}) => (

                <Container style={{paddingLeft:'20px'}} className="routeWrapper">
                    <div  className="Card_route box">
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title">Planning voor vandaag</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={8} className="Cargobike_res_details">
                                <h1>P+R Reitdiep</h1>
                                <h1>Friesestraatweg 152</h1>
                                <h2>Reparatie - Cargobike 12</h2>
                            </Col>
                            <Col xs={4} className="Cargobike_res_details">
                                <CondP>
                                    <b>Conditie 2</b>
                                </CondP>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={8} className="Cargobike_res_details">
                                <h1>P+R Meerstad</h1>
                                <h1>Driebondsweg 65</h1>
                                <h2>Onderhoud - Cargobike 3</h2>
                            </Col>
                            <Col xs={4} className="Cargobike_res_details">
                                <CondP>
                                    <b>Conditie 8</b>
                                </CondP>
                            </Col>
                        </Row>
                        <Row>
                           <Col xs={8} className="Res_wijzigen">
                                <h3>
                                <a href="NietBeschikbaar">
                    <Button onclick="NietBeschikbaar"> Planning bekijken <ArrowForwardIcon/></Button>
                    </a>
                                </h3>
                            </Col> 
                        </Row>
                    </div>
                </Container>

            ))
}
        </div>
    )
}
export default MonteurRoute
