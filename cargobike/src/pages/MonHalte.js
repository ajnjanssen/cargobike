import React, { useState} from 'react';
import GoogleMap from '../components/GoogleMap';
import '../Googlemap.css';
import {Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import CbStatCard from '../components/CbStatCard';

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

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
`

const ContentBox_p = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 14;
`

  
export default function MonHalteMap(){
    //Zernike default
    const [halteNaam, setHalteNaam] = useState('P+R Reitdiep')
    const [halteLat, setHalteLat ] = useState(53.2448297264615);
    const [halteLen, setHalteLen ] = useState(6.528572957354985);

    return(
        <>
        <Container>
            <Page_Header>
                <Navigation_h1>Halte 4 - oost west</Navigation_h1>
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

        </>
    )
}