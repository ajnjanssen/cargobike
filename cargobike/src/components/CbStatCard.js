import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../CbStatCard.css';

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
      paddingLeft: 5,
    },
    switchBase: {
        color: "#FFFFFF",
        backgroundColor: "#88C053",
        width: 40,
        height: 40,
        "&$checked": {
          color: "#FFFFFF",
          backgroundColor: "#3F51B8",
          minWidth: 40,
          minHeight: 40,
          padding: 10,
          borderRadius: 20,
        },
        "&$checked + $track": {
          backgroundColor: "#FFFFFF"
        },
        '&$checked $thumb': {
            backgroundColor: "#3F51B8",
            transform: "none!important",
        },
        '&$checked :hover':{
          backgroundColor: "#3F51B8",
          padding: 5,
          borderRadius: 20,
        },
        '&$checked :active':{
            backgroundColor: "#3F51B8",
            animation: "None !important",
            transition: "None !important",
          },
        '&:hover':{
            backgroundColor: "#88C053",
        },
      },
      thumb: {},
      checked: {},
      track: {backgroundColor: "#FFFFFF"},
})(Switch);

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
        <div className="cbStatCard">  
            <Container>
                <Row>
                    <Col xs={8} md={8}>
                        <h1>Nummer {nr}</h1>
                        <h2>{afstand} m</h2>
                        <h3>Status: Wordt momenteel gebruikt</h3>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className="sw_container">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <CbSwitch
                                        checked={setcbLockState.checkedA}
                                        onChange={handleChange}
                                        name="checkedA"
                                        checkedIcon={<LockIcon color="white"/>}
                                        icon={<LockOpenIcon/>}
                                    />
                                    }
                                />
                            </FormGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}