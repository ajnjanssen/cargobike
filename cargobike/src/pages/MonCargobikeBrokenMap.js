import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MonCargobikeBrokenCard from '../components/MonCargobikeBrokenCard';
import { Row } from 'react-bootstrap';

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
    margin-top: 9vh;
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

const Scrollbar = styled.div`
    display: flex;
    overflow-x: scroll;
    position: absolute;
    bottom: 0;
    width: 100vw;
`

const Scrollbar_item = styled.div`
    margin: 20px;
`

export default function MonCargobikeBrokenMap(){
    // this event dispatcher gives the event listner the news we want a certain navigation for this user.
    const event = new Event('showNavbarMon');
    window.dispatchEvent(event);
    
    //Busted cargobikes generator
    var bustedCb = new Array;
    var bustedTypes = ['Standard', 'Deluxe'];
    var bustedAmount = Math.floor(Math.random() * 8);
    //Default stats
    var bustedRadius = 100;
    var bustedNr = 10;
    var bustedConditie = 8;
    var bustedLat = 53.206008505814204; //Westerlijkste zijde stad
    var bustedLang = 6.533303830516705; // Zuiderlijkste zijde stad
    for(var i = 1; i < bustedAmount + 1; i++){
        var bustedRadius = Math.floor(Math.random() * 100);
        var bustedNr = Math.floor(Math.random() * 20);
        var bustedConditie = Math.floor(Math.random() * 4) + 1; //cond = 0 bestaat niet
        var bustedLat = 53.206008505814204 + (Math.random() * 0.03560893870131); //Oosterlijkste zijde van stad
        var bustedLang = 6.533303830516705 + (Math.random() * 0.053901668477234); //Oosterlijkste zijde van stad
        var typeNr = Math.floor(Math.random() * bustedTypes.length);
        bustedCb.push(
            {id: i, radius: bustedRadius, nr: bustedNr, conditie: bustedConditie, lat: bustedLat, lng: bustedLang, type: bustedTypes[typeNr]}
        );
        //Reset lat and lang
        var bustedLat = 53.206008505814204;
        var bustedLang = 6.533303830516705;
    }

    return(
        <>
            <Contentbox>   
                <CbInput id="standard-basic" label="Vul een cargobike#" InputProps={{disableUnderline: true}} > </CbInput>
                <CbSearchBtn><SearchIcon/></CbSearchBtn>
            </Contentbox>
            <GoogleMap styleclassname = {"MonHaltesMap"} bustedCb={bustedCb}/>
            
            <Row>
                <Scrollbar>
                    {bustedCb.map((bike) =>
                        <Scrollbar_item>
                            <MonCargobikeBrokenCard
                                id= {bike.id}
                                type= {bike.type}
                                rad = {bike.radius}
                                cond = {bike.conditie}
                            />
                        </Scrollbar_item>
                    )}
                </Scrollbar>
            </Row>
        </>
    )
}