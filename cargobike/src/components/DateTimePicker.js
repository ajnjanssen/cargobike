import React from 'react';
import {useState} from 'react';

//Form
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

export default function DateTimePicker(){
    //Set current date and time to current
    const [selectedDateTime, setSelectedDate] = useState(new Date());
    function handleDateChange(date){
        setSelectedDate(date);
    }
    
    return(
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
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                value={selectedDateTime}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}