import React, { useState} from 'react';
import {Marker} from 'google-maps-react';
import { Link } from "react-router-dom";

export default function GoogleMapsCustomMarker(props){

    const test = props.foo;
    
    function onMarkerClick(){
        console.log({test});
    };

    return (
        <Link>
            <Marker
                onClick={onMarkerClick}
                {...props}
            />
        </Link>
    );
};
