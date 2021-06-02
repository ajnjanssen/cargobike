import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

//Place green icon over nav_icon
import { CgMenuLeft } from "react-icons/cg";

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

const Coloured_navbaricon = styled.div`
    margin-left: 1.75rem;
    font-size: 2rem;
    color: #88C053;
    background-color: black,
    z-index: -30;
    position:absolute;
    margin-bottom: -120px;
    margin-top: 10px;
    height: 2rem;
    width: 2em;
`

export default function MonKapotteCbMap(){
    return(
        <div className="MonKapotteCbMap">
            <Contentbox>   
                <CbInput id="standard-basic" label="Vul een cargobike#" InputProps={{disableUnderline: true}} > </CbInput>
                <CbSearchBtn><SearchIcon/></CbSearchBtn>
            </Contentbox>
            <GoogleMap styleclassname = {"MonHaltesMap"}/>

        </div>
    )
}