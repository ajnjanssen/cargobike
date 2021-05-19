import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from "styled-components";

import PaymentIcon from '@material-ui/icons/Payment';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth:570,
      color:'black'
    //   backgroundColor: theme.palette.background.paper,
    },
  }));
  

function UserInformationData() {
    const history = useHistory();
    const classes = useStyles();

    const handleClick = () => {
        history.push("/UserInformation");
    }

    return (
        <div>
            <Container className="DasboardGreeting">
                <Row style={{paddingLeft:'20px'}}>
  
                    <Col xs={12} md={8}>
                        <div className="Dash_greet"></div>
                            <h1 className="Header_title">Betaalgegevens</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <NormalizeText>
                            Beheer eenvoudig uw betaalgegevens
                        </NormalizeText>
                        
                    </Col>
                    </Row>
                    <Row style={{paddingLeft:'20px'}}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <PaymentIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary="Bankrekeningnummer gewijzigd op 23-06-2021" 
                            secondary="Wijziging geaccepteerd" 
                            />
                            
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <PaymentIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary="Automatische afschrijving op 23-05-2021" 
                            secondary="Cargobike Deluxe abonnement" 
                            />
                        </ListItem>
                        </List>
                                            
                        </Row>
                    
            </Container>

            <Container>
                <ListRedirects>

               
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText 
                    primary="AUTOMATISCHE INCASSO" 
                    secondary="AFSCRHIJVING OP REKENING **** 7987"/>
                    <ChevronRightIcon />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="OVERZICHT VAN FACTUREN"
                    secondary="Handig voor je boekhouding"
                    />
                    <ChevronRightIcon />
                </ListItem>
               
                </List>

                </ListRedirects>

                <ListRedirects>
            <Button onClick={handleClick} variant="contained" min-width="300px" color="secondary">
                Terug naar accountpagina
            </Button>

                </ListRedirects>
            </Container>
        </div>
    )
}

export default UserInformationData


const NormalizeText = styled.h3`
      font-weight:200;
      color:#fff!important;
`

const ListRedirects = styled.div`
    display:flex;
    justify-content:center;
    margin-left:auto;

    > .MuiButton-root{
        min-width:350px;
    }
`
