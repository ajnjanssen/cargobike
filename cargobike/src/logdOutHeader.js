import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OndDashboard.css';
import background from './img/header_bg.svg';

function logdOutHeader() {
        return (
            <div className="Header">
                <div className="Header_bg" style={{ backgroundImage: `url(${background})` }}>

                </div>
            </div>
        );
    }   

export default logdOutHeader
