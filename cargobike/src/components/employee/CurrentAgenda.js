import React from 'react'
import { Col } from 'react-bootstrap'

function CurrentAgenda() {
    return (
        <div>
            <Col xs={8} className="Cargobike_res_details">
                <div className="Agenda_punt">
                <h4>Dinsdag 23-10-'21 - 11:15</h4> 
                <h1>Sontplein 5</h1>
                <h2>54 pakketten</h2>  
                </div>
                <div className="Agenda_punt">
                <h4>Dinsdag 24-10-'21 - 13:55</h4> 
                <h1>Zernikeplein 11</h1>
                <h2>31 pakketten</h2>  
                </div>
            </Col>
        </div>
    )
}

export default CurrentAgenda
