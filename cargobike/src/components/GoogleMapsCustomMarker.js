import React, { useState} from 'react';
import {Marker} from 'google-maps-react';

export default function GoogleMapsCustomMarker(props){

    const test = props.foo;
    
    function onMarkerClick(){
        console.log({test});
    };

    return (
        <Marker
            onClick={onMarkerClick}
            {...props}
        />
    );
};
