// css apart maken voor dit component
import './OndReservering.css';
import React, {useEffect, useState} from 'react'
import CurrentRoute from './components/CurrentRoute';
import SaleModels from './components/SaleModels';
import DashboardGreeting from './components/user/DashboardGreeting';
import { db } from './components/firebase/Firebase';

function OndDashboard() {
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
            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <DashboardGreeting />

            {/* Card met Actuele route */}
             <CurrentRoute />
        
            {/* Cards met Cargobike modellen*/}
            <SaleModels />

        </div>  
    )
}

export default OndDashboard
