
import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import placeholder from '../img/Map.png';
import {db} from './firebase/Firebase'
import "../TrackTrace.css";

import HistoryIcon from '@material-ui/icons/History';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
                    <div  className="Card_track box">
                        <Row>

                            <Col xs={10}>
                            <h1 className="Card_title_Bez">
                                <HistoryIcon className="Icon_Margin" style={{ fontSize: 22, color: "#88C053" }} />
                                 Geschiedenis
                              </h1>
                            </Col>

                            <Col xs={11} className="Cargobike_res_details">
                        
                        <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>

                         <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>
  
                        <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={9} className="Cargobike_res_details">
                                    <h4>Dinsdag 30-03-25 - 11:15</h4> 
                                    <h1>#CAR121099211022 </h1>
                                    <h2>Afgeleverd</h2>  
                            </Col>
                            <Col xs={3} className="Cargobike_res_details">
                            <ArrowForwardIcon style={{ fontSize: 28, color:'#88C053' }} />
                            </Col>
                        </Row>

                        <Col xs={12} className="Res_wijzigen">
                                <h3 className="Text_TrackKijk">Alle bezorgingen bekijken  <ArrowForwardIcon style={{ fontSize: 20, color:'#88C053' }} /></h3>
                            </Col>

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
