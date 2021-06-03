import React, { useState} from 'react';

//Styling
import { Container } from 'react-bootstrap';
import styled from "styled-components";

//Components
import GoogleMap from '../components/GoogleMap';
import CbStatCard from '../components/CbStatCard';
import OnderdeelStatus from '../components/OnderdeelStatus';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Page_Header = styled.div`
    padding-top: 15vh;
`

const Navigation_h1 = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 600
`
const Navigation_p = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 400;
`

const Contentbox = styled.div`
    margin-top: 5vh;
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
`

const ContentBox_p = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 14;
    margin: 0;
    padding: 0;
`

const ContentBottom = styled.div`
    margin-top: 5vh;
    background-color: white;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    color: black;
`

const ButtonContainer = styled.div`
    margin: 3%;
    float: right;
`

const Scrollbar = styled.div`
    display: flex;
    overflow-x: scroll;
`

const Scrollbar_item = styled.div`
    margin: 20px;
`

export default function MonHalteMap(){
    //Hoofdstation
    const [halteLat, setHalteLat ] = useState(53.2448297264615);
    const [halteLen, setHalteLen ] = useState(6.528572957354985);

    return(
        <>
        <Container>
            <Page_Header>
                <Button><Navigation_p> <ArrowBackIcon/> Terug </Navigation_p> </Button>
                <Navigation_h1>Halte 4 - Hoofdstation Groningen</Navigation_h1>
                <Navigation_p>6 oplaadplekken en reparatie voorzieningen</Navigation_p>
            </Page_Header>
            <Contentbox>
                <ContentBox_h1>Aanwezige Cargobikes</ContentBox_h1>
                <ContentBox_p >4 van de 6 plekken bezet</ContentBox_p>
                <CbStatCard nr="12" afstand="96"/>
                <CbStatCard nr="14" afstand="2"/>
                <CbStatCard nr="4" afstand="45"/>
                <CbStatCard nr="1" afstand="128"/>
            </Contentbox>
        </Container>
       
        <GoogleMap locationMarkerlat={ halteLat } locationMarkerlng= { halteLen }/>
        <ButtonContainer>
            <a href="https://maps.google.com/?q=53.2109719,6.5619039">
                <Button variant="contained" color="primary" size="large">
                    Ga naar locatie <ArrowForwardIcon/>
                </Button>
            </a>
        </ButtonContainer>

        <ContentBottom>
            <Container>
                <ContentBox_h1>Status van onderdelen voor deze halte</ContentBox_h1>
            </Container>

            <Scrollbar>
                <Scrollbar_item><OnderdeelStatus/></Scrollbar_item>
                <Scrollbar_item><OnderdeelStatus/></Scrollbar_item>
                <Scrollbar_item><OnderdeelStatus/></Scrollbar_item>
                <Scrollbar_item><OnderdeelStatus/></Scrollbar_item>
                <Scrollbar_item><OnderdeelStatus/></Scrollbar_item>
            </Scrollbar>
            
            <Container>
                {/*<a href="tel: somephonenumber">*/}
                    <Button>
                        <ContentBox_h1> <PhoneForwardedIcon/> Bel Cargobike leverancier</ContentBox_h1>
                    </Button>
                {/* </a> */}
            </Container>
        </ContentBottom>
        </>
    )
}