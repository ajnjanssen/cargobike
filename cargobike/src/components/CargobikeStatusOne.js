import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import ph_img from "../img/Placeholder.png";

const Contentbox = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    padding-bottom: 0px;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    min-width: 300px;
    max-width: 500px;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
`

const ContentBox_h2 = styled.h2`
    color: #88C053;
    font-weight: 400;
    font-size: 20;
`
const Info_box = styled.div`
    background-color: #F5FAF1;
    border-radius: 15px;
    padding: 10px;
    width: 6.5em;
    margin: 10px;
    overflow: hidden;
`
const Info_label = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 18;
    margin: 0px;
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

export default function CargobikeStatus(props){
    return(
        <div className="CargobikeStatus">  
            <a href={'../MonCargobikeBroken'}>
            <Contentbox>
                <ContentBox_h1>NR 12 - Reparatie</ContentBox_h1>
                <ContentBox_h2>Standaard Cargobike</ContentBox_h2>
                <Row>
                    <Info_box>
                        <Info_label>Radius</Info_label>
                        <Info_data><strong>12%</strong> | 100%</Info_data>
                    </Info_box>
                    <Info_box>
                        <Info_label>Conditie</Info_label>
                        <Info_data>C1</Info_data>
                    </Info_box>
                    <Info_image src={ph_img}/>
                </Row>
            </Contentbox>
            </a>
        </div>
    )
}