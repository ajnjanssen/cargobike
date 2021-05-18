import React from 'react';
import {useState} from 'react';
import '../OndCbWijzigen.css';
//date-form module
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
//Date-form components
import { Container, Row, Col } from 'react-bootstrap';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
//Textfield used in Input
import { Button } from '@material-ui/core';

export default function OndCbWijzigen(){
    //Set userdata
    const [voornaam, setVoornaam] = useState('Voornaam')

    //Set current date and time
    const today = new Date();
    const [selectedDate, setSelectedDate] = React.useState(new Date(today));

    //state for dates?
    function handleDateChange(date){
        setSelectedDate(date);
    }

    return(
        <div className="OndCbWijzigen">
            {/* Dashboard Greeting */}
            <Container>
                <Row style={{paddingLeft: '15px'}}>
                    <Col xs={12} md={8} >
                        <h1 className="Dashgreeting">Goedemorgen, {voornaam}!</h1>
                        <h2 className="Dashgreeting">Jouw reservering wijzigen!</h2>   
                    </Col>
                </Row>
            </Container>

            {/* Content */}
            <Container>                
                <div className="card">
                    <Row className="card-partition">
                        <Col xs={12} md={12}>
                            <h1 className="card-partition">Datum van jouw reservering</h1>
                            <div className="datefield">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label=""
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>                   
                        </Col>
                    </Row>
                    <Row className="card-partition">
                        <Col xs={6} md={6}>
                            <h2 className="card-partition">Type Cargobike</h2>
                            <h2 className="card-partition">Locatie</h2>
                        </Col>
                        <Col xs={6} md={6}>
                            <h1 className="card-partition">Das</h1>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Button>Reservering opslaan</Button>
                        
  
                    <Button>Reservering annuleren</Button>
                </Row>
            </Container>
        </div>
    )
}