import React, { useState} from 'react';
import {Marker} from 'google-maps-react';
import CbStatCard from './CbStatCard';

export default function GoogleMapsCustomMarker(props){
    
    function onMarkerClick(){
        alert("lat = " + props.position.lat + " lang = " + props.position.lang )
    };

    return (
        <>
        <Marker
            onClick={onMarkerClick}
            {...props}
        />
        </>
    );
};
