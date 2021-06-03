import { Col, Container, Row, Tabs } from "react-bootstrap";
import "../Registration.css";
import React, { useState } from "react";
import { auth } from "../components/firebase/Firebase";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router";
import { db } from "../components/firebase/Firebase";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';

const event = new Event('showLogdOutHeader');
window.dispatchEvent(event);

function Registration() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const [datum, setDatum] = useState("");
  const [locatie, setLocatie] = useState("");
  const [pakketten, setPakketten] = useState("");
  const [tijd, setTijd] = useState("");

  const [userId, setUserId] = useState("");

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
        
        <div className="card col-12 col-lg-12 login-card mt-2 hv-center regBlock">
          <div className="makeAccount">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Registratie
                
              </Typography>
              <form className={classes.form} noValidate>
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
                      label="Email Adres"
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
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Ik wil inspiratie, marketingacties en updates ontvangen via e-mail."
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
                      Heeft u al een account? Log in.
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
