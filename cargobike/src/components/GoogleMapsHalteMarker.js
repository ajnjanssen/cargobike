import React, { useState} from 'react';
import {Marker} from 'google-maps-react';
import { Link } from "react-router-dom";

export default function GoogleMapsHalteMarker(props){
    
    function onclick(){
        console.log('hier');
    };

    return (
        <Link to="/MonHalte">
            <Marker
                {...props}
            />
        </Link>
    );
};
