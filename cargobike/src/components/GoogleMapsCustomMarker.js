import React, { useState} from 'react';
import {Marker} from 'google-maps-react';
import CbStatCard from './CbStatCard';

export default function GoogleMapsCustomMarker(props){

    const test = props.foo;
    
    function onMarkerClick(){
        alert("Hier moet nog data aan gekoppeld worden. Weet alleen niet hoe.")
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
