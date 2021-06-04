import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CbBustedMapCard from '../components/CbBustedMapCard';
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

export default function MonKapotteCbMap(){
    //Busted cargobikes generator
    var busted_cb = new Array;
    var busted_types = ['Standard', 'Deluxe'];
    var busted_amount = Math.floor(Math.random() * 8);
    //Default stats
    var busted_radius = 100;
    var busted_nr = 10;
    var busted_conditie = 8;
    var busted_lat = 53.206008505814204; //Westerlijkste zijde stad
    var busted_lang = 6.533303830516705; // Zuiderlijkste zijde stad
    for(var i = 1; i < busted_amount + 1; i++){
        var busted_radius = Math.floor(Math.random() * 100);
        var busted_nr = Math.floor(Math.random() * 20);
        var busted_conditie = Math.floor(Math.random() * 4) + 1; //cond = 0 bestaat niet
        var busted_lat = 53.206008505814204 + (Math.random() * 0.03560893870131); //Oosterlijkste zijde van stad
        var busted_lang = 6.533303830516705 + (Math.random() * 0.053901668477234); //Oosterlijkste zijde van stad
        var type_nr = Math.floor(Math.random() * busted_types.length);
        busted_cb.push(
            {id: i, radius: busted_radius, nr: busted_nr, conditie: busted_conditie, lat: busted_lat, lng: busted_lang, type: busted_types[type_nr]}
        );
        var busted_lat = 53.206008505814204;
        var busted_lang = 6.533303830516705;
    }

    return(
        <>
            <Contentbox>   
                <CbInput id="standard-basic" label="Vul een cargobike#" InputProps={{disableUnderline: true}} > </CbInput>
                <CbSearchBtn><SearchIcon/></CbSearchBtn>
            </Contentbox>
            <GoogleMap styleclassname = {"MonHaltesMap"} busted_cb={busted_cb}/>
            
            <Row>
                <Scrollbar>
                    {busted_cb.map((bike) =>
                        <Scrollbar_item>
                            <CbBustedMapCard
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