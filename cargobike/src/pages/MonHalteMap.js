import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const CbSearchBtn = withStyles({
    root: {
      backgroundColor: '#F5FAF1',
      color: '#88C053',
      marginTop: '10px',
      minWidth: 'auto',
      borderRadius: '15px',
    }
})(IconButton);

export default function MonHaltesMap(){

    // this event dispatcher gives the event listner the news we want a certain navigation for this user.
    const event = new Event('showNavbarMon');
    window.dispatchEvent(event);

    var haltes = new Array;
    haltes.push(
        //P+R Kardinge
        {id: 1, naam: 'Kardinge', lat: 53.23818285334112, lng: 6.59414209732099}
    );
    haltes.push(
        //P+R Hoogkerk
        {id: 2, naam: 'P+R Hoogkerk', lat: 53.19762858868361, lng: 6.513166262838857}
    );
    haltes.push(
        //P+R Hoofdstation
        {id: 3, naam: 'P+R Hoofdstation', lat: 53.211712978442634, lng: 6.561086218719561}
    );
    haltes.push(
        //P+R Euroborg
        {id: 4, naam: 'P+R Euroborg', lat: 53.209844738596495, lng: 6.593501203378418}
    );
    haltes.push(
        //P+R Zernike
        {id: 5, naam: 'P+R Zernike', lat: 53.2448297264615, lng: 6.528572957354985}
    );

    return( 
        <>
             <Link to="/MonHalte">
                <GoogleMap styleclassname = {"MonHaltesMap"}  haltes={haltes}/>
            </Link>
        </>
    )
}