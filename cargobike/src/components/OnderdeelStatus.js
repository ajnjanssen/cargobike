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

export default function OnderdeelStatus(props){
    //Onderdeel generator
    let Onderdelen=['Voorband', 'Achterband', 'Fietsketting', 'Accu', 'Display', 'Verlichting', 'Remmen', 'Zadel', 'Spatborden', 'Wiel', 'Claxon'];
    let Onderdeel_generate = Onderdelen[Math.floor(Math.random() * Onderdelen.length-1)];

    //Random number generator
    const nr_generate = Math.floor(Math.random() * 20) + 1;
    const prijs_generate = Math.floor(Math.random() * 50) + 1;
    const dagen_generate = Math.floor(Math.random() * 14);
    return(
        <div className="OnderdeelStatus">  
            <Contentbox>
                <ContentBox_h1>Nr {props.nr || nr_generate } - Aanvraag</ContentBox_h1>
                <ContentBox_h2>{Onderdeel_generate}</ContentBox_h2>
                <Row>
                    <Info_box>
                        <Info_label>Aankomst</Info_label>
                        <Info_data>{props.dagen || dagen_generate } dag(en)</Info_data>
                    </Info_box>
                    <Info_box>
                        <Info_label>Prijs</Info_label>
                        <Info_data>{props.prijs || prijs_generate } euro</Info_data>
                    </Info_box>
                    <Info_image src={ph_img}/>
                </Row>
            </Contentbox>
        </div>
    )
}