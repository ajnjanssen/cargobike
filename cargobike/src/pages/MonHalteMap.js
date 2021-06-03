import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
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
    return(
        <div className="MonKapotteCbMap">
            <Contentbox>   
                <h1>P+R Hoofdstation</h1>
                <p>Paar cargobikes hier</p>
                <p>En wat bezorgers daar</p>
                <p>Dit is een WIP</p>
            </Contentbox>
            <GoogleMap styleclassname = {"MonHaltesMap"}/>
        </div>
    )
}