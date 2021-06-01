// any questions about this page can be asked to Isa Winkenius
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from "react";
import Box from '@material-ui/core/Box';

// importing images for the situation
import SituationImage1 from '../img/cargobike-repair-1.jpg';
import SituationImage2 from '../img/cargobike-repair-2.jpg';
import SituationImage3 from '../img/cargobike-repair-3.jpg';

const StyledButton = styled(Button)`
  background-color: 'white';
  color: 'grey';
  padding: 7px 14px;
  &:hover {
    background-color: #e1f2d0;
  }
  font-size: 12px;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
},
  root: {
    flexGrow: 1,
    color: 'dark-grey',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  box: {
    padding: 0,
    paddingRight: 15,
    marginTop: 5,
  }
}));

export default function CargoPicturesCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className={classes.root}>
      <Paper className={classes.paper} style={{margin: 20, borderRadius: 20, boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.13)'}}>
        <div style={{padding: 5}}>
          <Grid container spacing={4}>
            <Grid item  xs={12}sm container>
              <Grid item container direction="row">
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" style={{color: '#96cc63', fontSize: 18, fontWeight: 500}}>
                    Foto's van de situatie
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ width: '100%', overflow: 'hidden',  overflowX: 'scroll' }}>
            <Box display="flex" flexDirection="row" bgcolor="background.paper">
              <Box className={classes.box} p={1}>
              <img src={SituationImage1} alt="Image Situation 1" style={{height:200, borderRadius:10,}}></img>
              </Box>
              <Box className={classes.box} p={1}>
              <img src={SituationImage2} alt="Image Situation 1" style={{height:200, borderRadius:10}}></img>
              </Box>
              <Box className={classes.box} p={1} >
              <img src={SituationImage3} alt="Image Situation 1" style={{height:200, borderRadius:10}}></img>
              </Box>
            </Box>
            </div>
        </div>
      </Paper>
    </div>
  );
}
