import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ph_img from "../img/Placeholder.png";
import { Link } from "react-router-dom";

const MarkerConditiebox = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 18rem;
    padding: 15px;
    padding-bottom: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    z-radius: 12;
    margin-right: 10px;
`

const MCB_h1 = styled.h1`
    font-size: 20px;
    color: #838383;
`

const MCB_h2 = styled.h2`
    font-size: 16px;
    color: #88C053;
    font-weight: 400;
`

const MCB_detailcard = styled.div`
    background-color: #F5FAF1;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
    margin-right: 10px;
    overflow: hidden;
`

const MCB_detaillabel = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
`

const MCB_detail_bold = styled.div`
    color: #88C053;
    font-size: 14px;
    font-weight: 600;
    float: left;
    margin-top: 0;
`

const MCB_detail_reg = styled.div`
    color: #88C053;
    font-size: 14px;
    font-weight: 400;
    float: left;
    margin-top: 0;
`

const MCB_image = styled.img`
    width: 100%;
`

export default function MonKapotteCbCard(props){
    return (
        <Link to="/MonCargobike">
            <MarkerConditiebox>
                <MCB_h1>Nr. {props.id || '1'} - Reparatie</MCB_h1>
                <MCB_h2>Cargobike {props.type || 'Standard'} </MCB_h2>
                <Row>
                    <MCB_detailcard>
                        <MCB_detaillabel>Radius:</MCB_detaillabel>
                        <p><MCB_detail_bold>{props.rad || '10'}% |</MCB_detail_bold> <MCB_detail_reg>100%</MCB_detail_reg></p>
                    </MCB_detailcard>
                    <MCB_detailcard>
                        <MCB_detaillabel>Conditie:</MCB_detaillabel>
                        <p><MCB_detail_bold>{props.cond || 1 }</MCB_detail_bold></p>
                    </MCB_detailcard>
                    <MCB_image src={ph_img}/>
                </Row>
            </MarkerConditiebox>
        </Link>
    );
};
