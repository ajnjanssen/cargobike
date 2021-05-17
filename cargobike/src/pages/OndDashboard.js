// css apart maken voor dit component
import '../OndReservering.css';
import React from 'react'
// import React, {useEffect, useState} from 'react'
import CurrentRoute from '../components/CurrentRoute';
import SaleModels from '../components/SaleModels';
import DashboardGreeting from '../components/user/DashboardGreeting';
import { Button } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import { db } from '../components/firebase/Firebase';

function OndDashboard() {
    const history = useHistory();

    // const [routes,
    //     setRoutes] = useState([]);
    //         useEffect(() => {
    //          db
    //         .collection('routes')
    //         .onSnapshot(snapshot => {
    //             setRoutes(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 route: doc.data()
    //             })));
    //         })
    // }, []);

    const handleNewDelivery = () => {
        history.push("/OndSend")
    }
    
    return (
        
        <div className='OndDashboard'>
            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <DashboardGreeting />
            <Row style={{marginLeft : '35px', marginTop: '-40px', marginBottom: '30px'}}>

                <Button onClick={handleNewDelivery} variant="outlined" color="secondary">
                Nieuwe verzending aanemelden
                </Button>
            </Row>

            {/* Card met Actuele route */}
             <CurrentRoute />
        
            {/* Cards met Cargobike modellen*/}
            <SaleModels />

        </div>  
    )
}

export default OndDashboard
