import React from 'react'
import { Col } from 'react-bootstrap'

function CurrentAgenda() {
    return (
        <div>
            <Col xs={8} className="Cargobike_res_details">
                <div className="Agenda_punt">
                <h4>Dinsdag 30-03-25 - 11:15</h4> 
                <h1>Route P+R Reitdiep </h1>
                <h2>34 pakketten</h2>  
                </div>
                <div className="Agenda_punt">
                <h4>Dinsdag 30-03-25 - 13:20</h4> 
                <h1>Route P+R Meeerstad</h1>
                <h2>26 pakketten</h2>  
                </div>
            </Col>
        </div>
    )
}

export default CurrentAgenda
