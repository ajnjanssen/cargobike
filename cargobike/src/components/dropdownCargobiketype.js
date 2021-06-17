import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CBTypeDropdown() {
  const classes = useStyles();

  //cargobiketype-dropdown
  const [cargobikeType, setcargobikeType] = useState('CARGOBIKE Standard')
  const [cargobikeCap, setcargobikeCap] = useState(34);
  function handleCbTypeChange(event){
    setcargobikeType(event.target.value);
    //Adjust capacity to cargobiketype.
    //Switch > if/else for future cargobike type additions
    //The output is switched?
    switch(cargobikeType){
        case 'CARGOBIKE Standard':
            setcargobikeCap(48);
        break;
        case 'CARGOBIKE Deluxe':
            setcargobikeCap(34);
        break;
    }
  }

  return (
    <div>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          autoWidth={true}
          native
          value={cargobikeType}
          onChange={handleCbTypeChange}
          inputProps={{ name: 'cargobike-type'}}
          classes={{icon:classes.icon,}}
        >
          <option value={'CARGOBIKE Standard'}>CARGOBIKE Standard</option>
          <option value={'CARGOBIKE Deluxe'}>CARGOBIKE Deluxe</option>
        </Select>
        <FormHelperText>{cargobikeCap} pakketten</FormHelperText>
      </FormControl>
    </div>
  );
}
