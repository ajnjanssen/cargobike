import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../CbStatuscard.css';

//test
import CustomizedSwitches from '../components/fortheloveof';

export default function CbStatuscard(props){
    const{nr, afstand} = props;
    //Lock: 'Op slot', 'Open', 'Niet beschikbaar'
    const [cbStat, setcbStat] = useState('Open');

    return(
        <div className="cbStatCard">  
            <Container>
                <Row>
                    <Col xs={8} md={8}>
                        <h1>Nummer {nr}</h1>
                        <h2>{afstand} m</h2>
                        <h3>Status: {cbStat}</h3>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className="sw_container">
                            <CustomizedSwitches/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}