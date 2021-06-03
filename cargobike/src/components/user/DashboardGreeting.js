import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {IconContext} from 'react-icons/lib'
import {db} from '../firebase/Firebase'

import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

function DashboardGreeting() {
    var corneId = 'lRiJdDyoWRUHMw82dp1G';
    const [ondernemers,
        setOndernemers] = useState([]);

    
    useEffect(() => {
        db
            .collection('ondernemers')
            // .where(auth.uid, '==', auth.uid)
            .onSnapshot(snapshot => {
                setOndernemers(snapshot.docs.map
                    
                    (doc => ({
                    
                    userId: console.log(doc.id),
                    ondernemer: doc.data().fName
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
                <Row style={{paddingLeft:'20px'}}>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>

                        {ondernemers.map(({id, ondernemer}) => (
                            <h1 className="Header_title">Goedemorgen {ondernemer}
                            </h1>

                        ))
}

                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc">Laten we iets verzenden</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_desc_greet">
                            <b><DirectionsBikeIcon style={{ fontSize: 20, color:'white' }} />Recente activiteit</b>
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
                                {/* <ul>
                                    

                                        {reserveringen.map(({id, reservering}) => (
                                            <li>
                                            <small class="text-muted">Cargobikes gereserveerd voor {reservering.datum}, {reservering.tijd}, {reservering.locatie}, {reservering.pakketten}</small>
                                            </li>
                                        ))}
                                </ul> */}
                            </IconContext.Provider>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardGreeting
