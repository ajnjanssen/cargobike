import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons/lib';
import { db } from '../firebase/Firebase';

import styled from "styled-components";

//icons for the page
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Button styling
import { Button } from '@material-ui/core';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const CbSearchBtn = withStyles({
    root: {
      backgroundColor: '#F5FAF1',
      color: '#88C053',
      marginTop: '5px',
      marginBottom: '5px',
      minWidth: 'auto',
      borderRadius: '15px',
      float: 'right',
      marginRight: '8px',
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
    margin-top: 2vh;
    background-color: white;
    border-radius: 15px;
    width: 21rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    position: relative;
    text-align: left;
    padding-left: 20px;
    float: left;
    z-radius: 12;
`


const ButtonContainer = styled.div`
    margin:16px;
    text-align: right;
`

function DashboardGreeting() {
    // var corneId = 'lRiJdDyoWRUHMw82dp1G';
    const [ondernemers,
        setOndernemers] = useState([]);

    
    useEffect(() => {
        db
            .collection('ondernemers')
            // .where(auth.uid, '==', auth.uid)
            .onSnapshot(snapshot => {
                setOndernemers(snapshot.docs.map
                    
                    (doc => ({
                    
                    userId: console.log(doc.id),
                    ondernemer: doc.data().fName
                    })
                ));
            })
    }, []);
    
    const [reserveringen,
        setReserveringen] = useState([]);
    useEffect(() => {
        db
            .collection('reserveringen')
            .onSnapshot(snapshot => {
                setReserveringen(snapshot.docs.map(doc => ({
                    id: doc.id,
                    reservering: doc.data()
                })));
            })
        }, []);

    return (

        <div>
            <Container className="DasboardGreeting">
              
                <Row style={{paddingLeft:'20px'}}>
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                        <Row style={{paddingLeft: 0}}>
                      <Col xs={12} md={12} className="BackButtonCargobike">
                          <div className="Button_TrackTrace">
                          <a href="javascript: history.go(-1)">
                    <Button onclick="javascript: history.go(-1)"><ArrowBackIcon/> Terug</Button>
                    </a>
                            </div>
                     </Col>
                  </Row>

                        {ondernemers.map(({id, ondernemer}) => (
                            <h1 className="Header_title">Track & Trace
                            </h1>

                        ))
}
                    <Col xs={12} className="Cargobike_res_details">

                    </Col>

                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Header_descTrack">Benieuwd waar je pakket is?</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1 className="Title_VerNummer">
                            { <b>Voer uw verzendnummer in</b> }
                        </h1>

                        <Contentbox>   
                            <CbInput id="standard-basic" label="Verzendnummer" InputProps={{disableUnderline: true}} > </CbInput>
                            <CbSearchBtn><SearchIcon/></CbSearchBtn>
                        </Contentbox>

                        {/* <FormControl>
                            <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                            <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            }
                            />
                        </FormControl> */}

                        <Row>
                         
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardGreeting
