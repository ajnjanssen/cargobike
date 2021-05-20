import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../CbStatuscard.css';

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
    },
    thumb: {
      width: 40,
      height: 40,
      borderRadius: 0,
      boxShadow: 'none',
    },
    checked: {},
    track: {backgroundColor: "#FFFFFF"}
  })(Switch);

export default function CbStatuscard(props){
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
                        <h3>Status: {status}</h3>
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
                                        checkedIcon={<LockIcon color="white" fontsize="large"/>}
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