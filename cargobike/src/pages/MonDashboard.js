// css apart maken voor dit component
import '../OndReservering.css';
import React, { useState } from 'react'
import styled from "styled-components";

// import React, {useEffect, useState} from 'react'
import MonteurRoute from '../components/MonteurRoute';
import { Container } from 'react-bootstrap';
import SaleModels from '../components/SaleModels';
import MonDashboardGreeting from '../components/user/MonDashboardGreeting';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from "../components/firebase/Firebase";

import CargobikeStatus from '../components/CargobikeStatusOne';
import CargobikeStatusTwo from '../components/CargobikeStatusTwo';

// import { db } from '../components/firebase/Firebase';


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

const ContentBottom = styled.div`
    margin-top: 5vh;
    background-color: white;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    color: black;
`


const Scrollbar_item = styled.div`
    margin: 20px;
`

const Scrollbar = styled.div`
display: flex;
overflow-x: scroll;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
`

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
            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <MonDashboardGreeting />

            <Col xs={12} md={8}>
              <h1 className="RecentActivity"><ArrowForwardIosIcon style={{ fontSize: 14, color:'white' }} />Er zijn momenteel geen spoedgevallen</h1>
              <h2 className="RecentActivity_Desc">Laatst bijgewerkt: 36 sec. geleden</h2>
            </Col>


        
            {/* Card met monteur route */}
             <MonteurRoute />
        
            {/* Cards met Cargobike modellen*/}
            <Container>
                <ContentBox_h1>Bekijk status van Cargobikes</ContentBox_h1>
            </Container>

            <Scrollbar>
                <Scrollbar_item><CargobikeStatus/></Scrollbar_item>
                <Scrollbar_item><CargobikeStatusTwo/></Scrollbar_item>
            </Scrollbar>
        </div>  
    )
}

export default OndDashboard
