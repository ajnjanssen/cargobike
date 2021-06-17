import React from 'react';
import {useState} from 'react';
import { Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

//Form
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function DateTimePicker(){
    //Set current date and time to current
    const [selectedDateTime, setSelectedDate] = useState(new Date());
    function handleDateChange(date){
        setSelectedDate(date);
    }

    const classes = useStyles();

    //location-dropdown
    const [dagdeel, setDagdeel] = useState('Ochtend');
  
    function handleTimeChange(event){
        setDagdeel(event.target.value);
    }
    
    return(
        <>
        <Col xs={8} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    value={selectedDateTime}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </Col>
        <Col xs={8} md={6}>
            <Select
                autoWidth={true}
                native
                value={dagdeel}
                onChange={handleTimeChange}
                inputProps={{ name: 'dagdeel'}}
                style={{paddingTop:'16px'}}
            >
                <option value={'Ochtend'}>Ochtend  6:30 - 8:00</option>
                <option value={'Middag'}>Middag  11:30 - 13:30</option>
                <option value={'Eind middag'}>Eind middag  15:30 - 17:00</option>
                <option value={'Avond'}>Avond  18:00 - 19:30</option>
            </Select>
        </Col>
       </>
    )
}