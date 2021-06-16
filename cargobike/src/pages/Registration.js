import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,

  TextField,
  Typography
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState} from "react";

import { Col, Container, Row } from "react-bootstrap";

import { useHistory } from "react-router";
import { auth, db } from "../components/firebase/Firebase";
import "../Registration.css";

import lottie from "lottie-web";


function Registration() {
  const event = new Event('showLogdOutHeader');
  window.dispatchEvent(event);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  // const [datum, setDatum] = useState("");
  // const [locatie, setLocatie] = useState("");
  // const [pakketten, setPakketten] = useState("");
  // const [tijd, setTijd] = useState("");

  // const [userId, setUserId] = useState("");

  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: fName });
      })

      .catch((error) => alert(error.message));

    db.collection("ondernemers").doc(auth.uid).set({
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    });

    history.push("/Login");
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      marginRight: 0
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const handleClick = () => {
    history.push("/Login");
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="registration">

      <Container>
        <div>
          <Row>
            <Col className="RowLogo"></Col>
          </Row>
        </div>
        
      </Container>

      <Container>
        
        <div className="col-12 col-lg-12 regBlock">
          <div className="makeAccount">
          <CssBaseline />
            <div className={classes.paper}>
              <Typography class="RegTitel" component="h1" variant="h5">
                Registreren voor CargoDelivery
              </Typography>
              <form className={classes.form} noValidate>
                <div class="RegAanmaken">
                <h2>Account aanmaken</h2>
                    <br></br>
                </div>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Voornaam"
                      autoFocus
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Achternaam"
                      name="lastName"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="E-mailadres"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Wachtwoord"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <text>
                      Velden met * zijn verplicht.
                    </text>
                    <br></br><br></br>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Ik ga akkoord met de algemene voorwaarden."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signUp}
                >
                  Registreren
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" onClick={handleClick} variant="body2">
                      Heeft u al een account? Log hier in.
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>{/* <Copyright /> */}</Box>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Registration;

