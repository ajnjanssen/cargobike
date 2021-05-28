// any questions about this page can be asked to Isa Winkenius

import React from 'react'
import CargoPicturesCard from '../components/CargoPicturesCard';
import CargoLogCard from '../components/CargoLogCard';

var cargobikeId = 12;
var cargobikeSoort = 'Standaard Cargobike';
var cargobikeStatus = 'C2';

function CargobikePage() {

    return (
        <div>
            <div>
                <h1 className="Header_title">Nummer {cargobikeId}</h1>
                <h3 className="">{cargobikeSoort} - {cargobikeStatus}</h3>
            </div>
            <CargoPicturesCard/>
            <CargoLogCard/>
        </div>
    )
}

export default CargobikePage
