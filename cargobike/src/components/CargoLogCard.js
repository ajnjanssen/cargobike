// any questions about this page can be asked to Isa Winkenius

import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// The Arrow Icons are being loaded here
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
    height: '100%'
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
}));

export default function CargoLogCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    return (
    
      <div className={classes.root}>
      <Paper className={classes.paper} style={{margin: 20, borderRadius: 20, boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.13)'}}>
        <div style={{padding: 5}}>
          <Grid container spacing={4}>
            <Grid item  xs={12}sm container>
              <Grid item xs={6} container direction="row">
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" style={{color: '#96cc63', fontSize: 18, fontWeight: 500}}>
                    Nr 3 - Reparatie
                  </Typography>
                  <Typography gutterBottom style={{fontSize: 14, marginTop: -6}}>
                    LOGBOEK - Conditie 2
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{textAlign:'right'}}>
                <StyledButton variant="subtitle1"  style={{cursor: 'pointer', textAlign:'left'}}> In logboek <br></br> schrijven<ArrowForwardIcon style={{ fontSize: 20, color:'#88C053', marginLeft : 10 }} /></StyledButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm container>
              <Grid item xs container></Grid>
                {/* new log entry */}
                <Grid item xs={12} sm container style={{marginBottom: 10}}>
                  <Grid item xs={1} >
                    <ArrowRightIcon style={{ fontSize: 20, color:'#88C053' }} />
                  </Grid>
                  <Grid item xs={11} >
                    <Typography variant="body2">
                    Nieuwe band besteld voor locatie 2.b. Hierop
                    wachten en alvast de accu aan het opladen.
                    </Typography>
                    <Typography variant="body2" style={{color:'grey'}}>
                  06.40 | 31-3-2021 | C2 - wachten op onderdelen
                  </Typography>
                  </Grid>
                </Grid>
                {/* new log entry */}
                <Grid item xs={12} sm container style={{marginBottom: 10}}>
                  <Grid item xs={1} >
                    <ArrowRightIcon style={{ fontSize: 20, color:'#88C053' }} />
                  </Grid>
                  <Grid item xs={11} >
                    <Typography variant="body2">
                    Nieuwe band besteld voor locatie 2.b. Hierop
                    wachten en alvast de accu aan het opladen.
                    </Typography>
                    <Typography variant="body2" style={{color:'grey'}}>
                  06.40 | 31-3-2021 | C2 - wachten op onderdelen
                  </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{textAlign:'center', marginTop:10}}>
                  <StyledButton variant="body2" style={{ cursor: 'pointer'}}>
                    Meer logs laden <ArrowDownwardIcon style={{ fontSize: 20, color:'#88C053', marginLeft : 10 }} />
                  </StyledButton>
            </Grid>
          </div>
      </Paper>
    </div>
  );
}
