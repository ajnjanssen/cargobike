// css apart maken voor dit component
import '../OndReservering.css';
import React, { useState } from 'react'
// import React, {useEffect, useState} from 'react'
import CurrentRoute from '../components/CurrentRoute';
import SaleModels from '../components/SaleModels';
import DashboardGreeting from '../components/user/DashboardGreeting';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { InputLabel, FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from "../components/firebase/Firebase";

// import { db } from '../components/firebase/Firebase';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styled from "styled-components";

const AddbuttonReservering = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 2;
    margin-left: 80%;
    margin-bottom: 10%;

    > .MuiFab-primary {
        background-color: #796ff6;
    }
`;

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

    formControl: {
        minWidth: 100
    }
  });

const Send__delivery = styled.div`
  width:400px;
  overflow-x: hidden;
`;

const HeaderContainer = styled.div`
    /* display:flex; */
    align-items:center;
    width:80%;
`

const ThisCol = styled.div`
  display: flex;
  justify-content: safe-center;
  padding-right: 100px;
  border-radius: 15px;
  :hover {
    background-color: #83b555;
    width: 80px;
    border-radius: 15px;
    cursor:pointer;
  }
`;

const ThisRow = styled.div`
  margin-left: 35px;
  > h1 {
    color: white !important;
  }
`;

const ThatRow = styled.div`
  margin-left: 36px;
  > h3 {
    color: white !important;
    font-weight:100;
  }
`;

const MakeSendOrder = styled.div`
    display:flex;
    flex-direction: column;
    
    align-items:flex-start;
    
    /* flex-wrap: wrap; */
    /* justify-content:center; */
    /* align-items:center; */
    border-radius:25px;
    margin-top:10px;
    margin-bottom: 30px;
    width:100%;
    height:420px;
    margin-left:25px;
    background:white;
    overflow: hidden;

    > Row {
        padding:25px;
    }

    > Row > h1 {
        font-size: 24px;
        font-weight 600;
        color: #9cd06b;
    }

    > Row date {
        margin-left:140px;
        padding-left:100px;
    }

    > Row > .MuiInputBase-input {
        font: inherit;
        color: currentColor;
        width: 290px;
        border: 0;
        height: 1.1876em;
        margin: 0;
        display: block;
        padding: 6px 0 7px;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;
    }
`;

const TimePicker = styled.div`
    margin-top: 20px;
    margin-left: 25px;
    width: 85%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    
`

const TextCol = styled.div`
    width:100%;
    height:100%;
    display:table;
    margin-top:10px;
`

const TextCol2 = styled.div`
    width:100%;
    height:100%;
    display:table;
    margin-top:27px;
`

const ButtonContainer = styled.div`
    padding-left:25px;
    margin-top:20px;
`


function OndDashboard() {
    const history = useHistory();

    // const [routes,
    //     setRoutes] = useState([]);
    //         useEffect(() => {
    //          db
    //         .collection('routes')
    //         .onSnapshot(snapshot => {
    //             setRoutes(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 route: doc.data()
    //             })));
    //         })
    // }, []);

    const handleNewDelivery = () => {
        history.push("/OndSend")
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
     };

    const handleClose = () => {
         setOpen(false);
     };

     const [datum, setDatum] = useState("");
     const [locatie, setLocatie] = useState("");
     const [type, setType] = useState("");
     const [tijd, setTijd] = useState("");
     const [adres, setAdres] = useState("");
     const [postcode, setPostcode] = useState("");
   
     const addNewReservation = (event) => {
       event.preventDefault();
                
     
   
       db.collection('reserveringen').doc(auth.uid).set({
           datum: datum,
           type: type,
           tijd: tijd,
           adres: adres,
           postcode, postcode
       })
       // console.log(uid);
       history.push("/OndDashboard");
     };
   
     const [select, setSelect] = useState(1)
   
     const [select2, setSelect2] = useState(1)
     
     const handleExitNewDelivery = () => {
       history.push("/OndDashboard")
   }
   
   
       const classes = useStyles();

    return (
        
        <div className='OndDashboard'>
            
        <AddbuttonReservering>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </AddbuttonReservering>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Send__delivery>
        <Row>

          <MakeSendOrder>
            <row>
                <h1>Zending reserveren</h1>
            </row>

            <Row style={{paddingLeft: 40, marginBottom: '30px', width: '100%'}}>
            <TextField 
            id="standard-basic" 
            label="Adres"
            value={adres}
            onChange={(e) => setAdres(e.target.value)} 
            />
            </Row>

            <Row style={{paddingLeft: 40, marginBottom: '30px', width: '100%'}}>
            <TextField 
            id="standard-basic" 
            label="Postcode" 
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)} 
            />
            </Row>


            <Row style={{paddingLeft: 40}} className="date">
            <form className={classes.container} noValidate>

              
                <TextField
                    id="date"
                    // label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    value={datum}
                    onChange={(e) => setDatum(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form>
            </Row>

            <TimePicker>       
            <Row>
                <Col>
                <TextCol>
                <h3>Moment</h3>
                </TextCol>
                </Col>

                <Col>
                <FormControl className={classes.formControl}>
                {/* <InputLabel id="label">Tijdstip</InputLabel> */}
                    <Select 
                    placeholder="test"
                    labelId="label"
                    id="select" 
                    value={select} 
                    displayEmpty
                    onChange={
                        (e) => setSelect(e.target.value)
                    }  
                    onClick={
                        (e) => setTijd(e.target.value)
                    }  
                    >
                    <MenuItem disabled value="">Selecteer een tijd</MenuItem>
                    <MenuItem value='6:30 - 8:00' onChange={(e) => setType(e.target.value)}><b>Ochtend - </b> 6:30 - 8:00</MenuItem>
                    <MenuItem value="11:30 - 1:30"><b>Middag - </b> 11:30 - 1:30</MenuItem>
                    <MenuItem value="3:30 - 5:00"><b>Eind middag - </b> 3:30 - 5:00</MenuItem>
                    <MenuItem value="6:00 - 7:30"><b>Avond</b> - 6:00 - 7:30 </MenuItem>
                </Select>
                </FormControl>
                </Col>
            </Row>
            <Row>
                <Col>
                <TextCol2>
                <h3>Type cargobike</h3>
                </TextCol2>
                </Col>

                <Col>
                <FormControl className={classes.formControl}>
                <InputLabel id="label"> </InputLabel>
                    <Select 
                    labelId="label" 
                    id="select" 
                    value={select2}
                    displayEmpty 
                    onChange={(e) => setSelect2(e.target.value)}
                    onClick={
                        (e) => setType(e.target.value)
                    }  >
                    <MenuItem disabled value="">Selecteer type</MenuItem>
                    <MenuItem value="Cargobike standard" onChange={(e) => setType(e.target.value)}><b>Cargobike standard</b></MenuItem>
                    <MenuItem value="Cargobike Deluxe" onChange={(e) => setType(e.target.value)}><b>Cargobike Deluxe</b></MenuItem>
                    
                </Select>
                </FormControl>
                </Col>
            </Row>
            </TimePicker>
            <ButtonContainer>

                <Button onClick={addNewReservation}>
                            Deze zending reserveren
                </Button>
            </ButtonContainer>
          </MakeSendOrder>
        </Row>
      </Send__delivery>
      </Dialog>

            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <DashboardGreeting />
        

            {/* Card met Actuele route */}
             <CurrentRoute />
        
            {/* Cards met Cargobike modellen*/}
            <SaleModels />

        </div>  
    )
}

export default OndDashboard
