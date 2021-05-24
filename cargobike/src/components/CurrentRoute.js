
import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import placeholder from '../img/Map.png';
import {db} from './firebase/Firebase'

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
                        <Row>

                            <Col xs={10}>
                                <h1 className="Card_title">Actuele route</h1>
                            </Col>

                            <Col xs={7} className="Cargobike_res_details">
                                <h1>{route.van}</h1>
                                <h2 className="LocSize">{route.naar}</h2>
                                <h3>{route.pakketten}
                                &nbsp;pakketten</h3>
                            </Col>
                            <Col xs={5} className="Cargobike_res_details">
                                <h2 className="TimeSize">
                                    <b>{route.tijd}
                                    &nbsp;minuten</b>
                                </h2>
                            </Col>

                            <Card.Img variant="top" src={placeholder} className="Route_img"/>

                            <Col xs={8} className="Res_wijzigen">
                            <Button  className="Button_reswijzigen">
                            Reservering wijzigen
                            </Button>
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
