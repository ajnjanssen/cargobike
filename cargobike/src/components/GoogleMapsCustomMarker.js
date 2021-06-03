import React, {useState} from 'react';
import {Marker} from 'google-maps-react';

export default function GoogleMapsCustomMarker(props){
    return (
        <>
        <Marker
            {...props}
        />
        </>
    );
};
