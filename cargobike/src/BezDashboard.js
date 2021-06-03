import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {useHistory } from 'react-router'

import './OndReservering.css';
import './BezDashboard.css';
import DashboardGreeting from './components/user/DashboardGreeting';
import CurrentAgenda from './components/employee/CurrentAgenda';
import ActRouteBez from './components/ActRouteBez';
import SaleModels from './components/SaleModels';

//Styling
import styled from "styled-components";


//Components
import GoogleMap from './components/GoogleMap';
import CbStatCard from './components/CbStatCard';
import OnderdeelStatus from './components/OnderdeelStatus';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import EventNoteIcon from '@material-ui/icons/EventNote';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

import ph_img from "./img/Placeholder.png";


const Scrollbar = styled.div`
display: flex;
overflow-x: scroll;
`

const Scrollbar_item = styled.div`
    margin: 20px;
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
        margin-bottom: 30px;
        margin-top: 20px;
    } > .MuiList-root {
        background-color: #fff;
        border-radius: 18px;
        box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 1%), 0 6.7px 5.3px rgb(0 0 0 / 1%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 1%), 0 41.8px 33.4px rgb(0 0 0 / 1%), 0 100px 80px rgb(0 0 0 / 2%);
    } 


`

const Info_box = styled.div`
    background-color: #F5FAF1;
    border-radius: 13px;
    padding: 8px;
    width: 5.7em;
    overflow: hidden;
    margin-left: 25px;
    margin-bottom: 9px;
    height: 59px;
`
const Info_label = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 18;
    margin: 0px;
    margin-left: 0px;
`

const Info_data = styled.p`
    color: #88C053;
    font-weight: 400;
    font-size: 16;
    margin: 0px;
`

const Info_image = styled.img`
    width: 100%;
`



function BezDashboard() {

    const handleClick = () => {
        history.push("/OndDashboard");
    }
    

    const history = useHistory();

    return (
        <div className='bezDashboard'>

            <DashboardGreeting/>
            
            
            <Col xs={12} md={8}>
              <h1 className="RecentActivity"><ArrowForwardIosIcon style={{ fontSize: 14, color:'white' }} />Bezorgroute voor 23-10-25, 11:15 Sontplein</h1>
              <h2 className="RecentActivity_Desc">Route 54 pakketten</h2>
            </Col>

            <Col xs={12} md={8}>
              <h1 className="RecentActivity2"><ArrowForwardIosIcon style={{ fontSize: 14, color:'white' }} />Bezorgroute voor 18-09-25, 13:55 Zernike</h1>
              <h2 className="RecentActivity_Desc2">Route 31 pakketten</h2>
            </Col>

            {/* Card met Actuele route */}
             <ActRouteBez />
             

            <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="BezorgerTitles">Ontdek jouw werkdag</h1>
                    </Col>
                </Row>
            </Container>


            <Scrollbar>
                <Scrollbar_item>        
                    <div className="Card_agenda box">
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title_Bez"><EventNoteIcon style={{ fontSize: 22, color:'#88C053' }} />Agenda</h1>
                            </Col>

                            {/* For loop schrijven voor actuele data van bezorger */}
                            <CurrentAgenda/>
                            <Col>
                                <h3 className="TextRes_Wijzigen">Agenda bekijken  <ArrowForwardIcon style={{ fontSize: 20, color:'#88C053' }} /></h3>
                            </Col>

                        </Row>
                    </div>
                </Scrollbar_item>

                <Scrollbar_item>        
                    <div className="Card_agenda box">
                        <Row>
                            <Col xs={12}>
                                <h1 className="Card_title_Bez"><DirectionsBikeIcon style={{ fontSize: 22, color:'#88C053', }} />Mijn Cargobike</h1>
                                <h2 className="Card_Under_Title">Cargobike Standaard</h2>
                            </Col>

                        <Row>
                            <Info_box>
                             <Info_label>Radius</Info_label>
                                <Info_data>40 km</Info_data>
                            </Info_box>
                            <Info_box>
                                    <Info_label>Capaciteit</Info_label>
                                    <Info_data>120 Liter</Info_data>
                                </Info_box>
                            {/* <Info_image src={ph_img}/> */}
                        </Row>

                        <Row>
                            <Info_box>
                             <Info_label>Batterij</Info_label>
                                <Info_data>83%</Info_data>
                            </Info_box>
                            <Info_box>
                                    <Info_label>Rijtijd</Info_label>
                                    <Info_data>52 min</Info_data>
                                </Info_box>
                            {/* <Info_image src={ph_img}/> */}
                        </Row>
                        <Col>
                                <h3 className="TextRes_Wijzigen">Cargobike bekijken  <ArrowForwardIcon style={{ fontSize: 20, color:'#88C053' }} /></h3>
                            </Col>
                        </Row>
                    </div>
                </Scrollbar_item>

            </Scrollbar>

            <ListRedirects>
            <Button onClick={handleClick} variant="contained" min-width="300px" color="secondary">
                Meld een probleem
            </Button>
            </ListRedirects>

        </div>
    )
}

export default BezDashboard
