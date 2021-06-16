//CSS file BezDashboard.css
import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import placeholder from '../img/Map.png';
import {db} from './firebase/Firebase'
import styled from "styled-components";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ZenWijzCont = styled.div`
    padding-top: 1vh;
`
function CurrenRoute() {

 
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
                        {/* Max 12 Cols in a Row. Remember to close Rows lest you want to mess up your layout */}
                        <Row>
                            <Col xs={12}>
                                <h1 className="Card_title">Eerstvolgende zending</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h2 className="TimeSize"> 
                                    <b>Over {route.tijd}
                                    &nbsp;minuten bij u</b>
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="Cargobike_res_details">
                                <h1>van {route.van}</h1>
                                <h2 className="LocSize"> naar {route.naar}</h2>
                                <h3>{route.pakketten}
                                &nbsp;pakketten</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Img variant="top" src={placeholder} className="Route_img"/>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <ZenWijzCont>
                                    <h3 className="TextRes_Wijzigen">Zending wijzigen  <ArrowForwardIcon style={{ fontSize: 20, color:'#88C053' }} /></h3>
                                </ZenWijzCont>
                            </Col> 
                        </Row>
                    </div>
                </Container>

            ))
}
        </div>
    )
}
export default CurrenRoute
