import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function Dropdown() {
  const classes = useStyles();

  //location-dropdown
  const [location, setLocation] = useState('P+R Kardinge');

  function handleLocationChange(event){
    setLocation(event.target.value);
  }

  return (
    <div>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          autoWidth={true}
          native
          value={location}
          onChange={handleLocationChange}
          inputProps={{ name: 'cargobike-type'}}
        >
          <option value={'P+R Reitdiep'}>P+R Reitdiep</option>
          <option value={'P+R Kardinge'}>P+R Kardinge</option>
          <option value={'P+R Hoogkerk'}>P+R Hoogkerk</option>
          <option value={'P+R Zernike'}>P+R Zernike</option>
          <option value={'P+R Euroborg'}>P+R Euroborg</option>
          <option value={'P+R Hoofdstation'}>P+R Hoofdstation</option>
        </Select>
      </FormControl>
    </div>
  );
}
