import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { db } from '../components/firebase/Firebase';
import {useHistory } from 'react-router'
import DeleteIcon from '@material-ui/icons/Delete';

import '../UserInformation.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
  function UserInformation() {
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
    const classes = useStyles();
    const history = useHistory();
    
  const handleClick = () => {
    history.push("/OndDashboard");
}

    const handlePaymentDetails = () =>{
        history.push("/UserInformationData");
    }
    return (
        <div>
            <Container className="DasboardGreeting">
                <Row style={{paddingLeft:'20px'}}>
  
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                            <h1 className="Header_title">Details van je account</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <NormalizeText>
                        Eenvoudig je gegevens inzien
                        </NormalizeText>
                        
                    </Col>
                    
                </Row>
            </Container>

            <Container>
                <UserContainer>
                    <UserAvatar>
                        <AccountCircleIcon />
                    </UserAvatar>
                    <UserDisplay>
                    {ondernemers.map(({id, ondernemer}) => (
                        <NormalizeTextAlt>
                            {ondernemer}
                            </NormalizeTextAlt>

                        ))
}                       <NormalizeTextAlt2>
                        OKAPHONE Elektronika
                        </NormalizeTextAlt2>
                    </UserDisplay>
                </UserContainer>
            </Container>

            <Container>
                <ListRedirects>

               
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button onClick={handlePaymentDetails}>
                    <ListItemText primary="Betaalgegevens" />
                    <ChevronRightIcon style={{ color: '#88C053' }} />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Account" />
                    <ChevronRightIcon style={{ color: '#88C053' }}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Abonnement" />
                    <ChevronRightIcon style={{ color: '#88C053' }} />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Privacybeleid" />
                    <ChevronRightIcon style={{ color: '#88C053' }} />
                </ListItem>
                <ListRedirects>




                </ListRedirects>
                </List>

                </ListRedirects>

                <ButtonDeleteAccount>
                <Button
                 className="ButtonAccountDelete"
                 startIcon={<DeleteIcon />}
                >
                 Account verwijderen
                </Button>
            </ButtonDeleteAccount>

                <ListRedirects>
            <Button onClick={handleClick} variant="contained" min-width="300px" color="secondary">
                Terug naar dashboard
            </Button>

                </ListRedirects>
            </Container>
        </div>
    )
}

export default UserInformation

const ButtonDeleteAccount = styled.div`
    background-color: none!important;
    margin-top: 30px;
    color: #838383!important;
    text-transform: none!important;
`

const UserContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const ListRedirects = styled.div`
    display:flex;
    justify-content:center;
    margin-left:auto;

    > .MuiButton-root{
        min-width:350px;
        background-color: #796FF6;
        text-transform: none;
        height: 45px;
        border-radius: 8px;
        margin-bottom: 20px;
    } > .MuiList-root {
        background-color: #fff;
        border-radius: 18px;
        box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 1%), 0 6.7px 5.3px rgb(0 0 0 / 1%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 1%), 0 41.8px 33.4px rgb(0 0 0 / 1%), 0 100px 80px rgb(0 0 0 / 2%);
    } 


`
const ThisCol = styled.div`
margin-top:20px;
    margin-left:10px;
    display: flex;
    justify-content: safe-center;
    padding-right: 100px;
    border-radius: 15px;
    :hover {
        background-color: #83b555;
        width: 80px;
        border-radius: 15px;
  }
`

const NormalizeText = styled.h3`
      font-weight:500;
      font-size: 16px;
      color:#fff!important;
`

const NormalizeTextAlt = styled.h3`
      font-weight:500;
      font-size: 24px;
      color:#9bcf6a !important;
`

const NormalizeTextAlt2 = styled.h3`
      font-weight:500;
      font-size: 16px;
      color:#838383 !important;
`

const UserAvatar = styled.div`
width:200px;
height:200px;
padding-left:5px;
margin-left:auto;
margin-right:auto;
background-color:lightgrey;
border-radius:40px;
 > .MuiSvgIcon-root {
    padding: 30px;
    padding-right: 80px;
    padding-bottom: 55px;
     
     display:flex;
     align-items:center;
     justify-content:center;
    font-size:240px!important;
    color:grey;
 }

 :hover{
     opacity: 0.9;
     cursor:pointer;
 }

`
const UserDisplay = styled.div`
display:flex;
margin-top:15px;
margin-bottom:15px;
flex-direction:column;
justify-content:center;
margin-left:auto;
margin-right:auto;
text-align:center;
width:50%;
`