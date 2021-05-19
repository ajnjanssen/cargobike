import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { db } from '../components/firebase/Firebase';
import {useHistory } from 'react-router'

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
                            <h3 style={{color:'#9bcf6a'}}>{ondernemer}</h3>

                        ))
}
                        <h4>Onderneming</h4>
                    </UserDisplay>
                </UserContainer>
            </Container>

            <Container>
                <ListRedirects>

               
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button onClick={handlePaymentDetails}>
                    <ListItemText primary="BETAALGEGEVENS" />
                    <ChevronRightIcon />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="ACCOUNT" />
                    <ChevronRightIcon />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="ABONNEMENT" />
                    <ChevronRightIcon />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="PRIVACYBELEID" />
                    <ChevronRightIcon />
                </ListItem>
                <ListRedirects>

                <Button width="300px" color="primary">
                Account verwijderen
                </Button>
                </ListRedirects>
                </List>

                </ListRedirects>

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

const UserAvatar = styled.div`
width:250px;
height:250px;
padding-left:5px;
margin-left:auto;
margin-right:auto;
background-color:lightgrey;
border-radius:40px;
 > .MuiSvgIcon-root {
     padding:10px;
     
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