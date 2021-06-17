import React from 'react'
import DashboardGreeting from '../components/user/DashboardGreeting'
import CurrentRoute from '../components/CurrentRoute'
import SaleModels from '../components/SaleModels'

function Test() {
    return (
        <div className='test'>
            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <DashboardGreeting />

            {/* Card met Actuele route */}
             <CurrentRoute />
        
            {/* Cards met Cargobike modellen*/}
            <SaleModels />
        </div>
    )
}

export default Test
