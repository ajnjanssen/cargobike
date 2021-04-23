// css apart maken voor dit component
import './OndReservering.css';

import CurrentRoute from './components/CurrentRoute';
import SaleModels from './components/SaleModels';
import DashboardGreeting from './components/user/DashboardGreeting';




function OndDashboard() {

    
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
