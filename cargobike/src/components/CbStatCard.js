import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";

//Switch styling
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const CbSwitch = withStyles({
    root: {
      overflow: 'visible',
    },
    switchBase: {
      color: "#FFFFFF",
      backgroundColor: "#88C053",
      "&$checked": {
        color: "#FFFFFF",
        backgroundColor: "#3F51B8"
      },
      "&$checked + $track": {
        backgroundColor: "#FFFFFF"
      },
      '&$checked $thumb': {
        backgroundColor: "#3F51B8"
      },
      '&$checked :hover':{
        backgroundColor: "#3F51B8",
        width: 41,
        height: 41,
        padding: 6,
        borderRadius: 20,
      },
      '&:hover':{
          backgroundColor: "#88C053",
          width: 41,
          height: 41,
          padding: 6,
          borderRadius: 20,
      },
    },
    thumb: {
      backgroundColor: "#3F51B8",
      width: 40,
      height: 40,
      borderRadius: 0,
      boxShadow: 'none',
      '&$checked :hover':{
        backgroundColor: "#3F51B8"
      },
    },
    checked: {},
    track: {backgroundColor: "#FFFFFF"},
  })(Switch);

const Stat_h1 = styled.h1`
    font-weight: 600;
    font-size: 28;
    color: #838383;
`

const Stat_h2 = styled.h2`
    font-weight: 400;
    font-size: 28;
    color: #838383;
`

const Stat_h3 = styled.h3`
    color: #3F51B8;
    font-weight: 600;
`

const CbStatContainer = styled.div`
    margin-top: 2vh;
`

const Sw_container = styled.div`
    border: 3px solid #838383;
    border-radius: 15px;
    padding-left: 12px;
    text-align: right;
    width: 70px;
    height: 50px;
`

export default function CbStatcard(props){
    const{nr, afstand} = props;
    
    //Lock
    const [cbLockState, setcbLockState] = useState({checkedA: true,});
    const handleChange = (event) => {
        //Does not work consistently
        if(cbLockState.checkedA == false){
            setStatus('Vergrendeld')
        }else{
            setStatus('Ontgrendeld')
        }
        setcbLockState({ ...setcbLockState, [event.target.name]: event.target.checked });
    };

    const[status, setStatus] = useState('Ontgrendeld');

    return(
        <CbStatContainer>  
            <Container>
                <Row>
                    <Col xs={8} md={8}>
                        <Stat_h1>Nummer {nr}</Stat_h1>
                        <Stat_h2>{afstand} m</Stat_h2>
                        <Stat_h3>Status: {status}</Stat_h3>
                    </Col>
                    <Col xs={4} md={4}>
                        <Sw_container>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <CbSwitch
                                        checked={setcbLockState.checkedA}
                                        onChange={handleChange}
                                        name="checkedA"
                                        checkedIcon={<LockIcon color="white" fontsize="large"/>}
                                        icon={<LockOpenIcon/>}
                                    />
                                    }
                                />
                            </FormGroup>
                        </Sw_container>
                    </Col>
                </Row>
            </Container>
        </CbStatContainer>
    )
}