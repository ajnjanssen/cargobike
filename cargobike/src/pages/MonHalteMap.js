import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const CbSearchBtn = withStyles({
    root: {
      backgroundColor: '#F5FAF1',
      color: '#88C053',
      marginTop: '10px',
      minWidth: 'auto',
      borderRadius: '15px',
    }
})(IconButton);

const CbInput = styled(TextField)`
    label.Mui-focused {
        color: #88C053;
    }
    .MuiOutlinedInput-root {
        fieldset {
            border-color: #88C053;
        }
        &:hover fieldset {
            border-color: yellow;
        }
        &.Mui-focused fieldset {
            border-color: red;
            text-decoration: none;
        }
    border-bottom: none;
`

const Contentbox = styled.div`
    margin-top: 12vh;
    background-color: white;
    border-radius: 15px;
    width: 18rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    position: relative;
    text-align: center;
    float: right;
    z-radius: 12;
`
export default function MonHalteMap(){
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
        <div className="MonKapotteCbMap">
            <GoogleMap styleclassname = {"MonHaltesMap"} haltes_locaties = {haltes} />
        </div>
    )
}