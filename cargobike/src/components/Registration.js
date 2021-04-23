import {Col, Container, Row} from 'react-bootstrap'
import './Registration.css';
import React, {useState, useEffect} from "react";
import {auth} from './firebase/Firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
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
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function Registration() {
    const [fName,
        setFName] = useState('');
    const [lName,
        setLName] = useState('');
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [user,
        setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
                if (authUser.displayName) {
                    //niks doen
                } else {
                    return authUser.updateProfile({displayName: fName})
                }
            } else {
                setUser(null);

            }
        })
    }, [user, fName]);

    const signUp = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser
                    .user
                    .updateProfile({displayName: fName})
            })
            .catch((error) => alert(error.message));
    }

    const signIn = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message));
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Container>

                <div>
                    <Row>
                        <Col className="RowLogo">

                            <h1 className="logoRegistration">LOGO CARGOBIKE</h1>
                            {/* <h1>{user.fName}</h1> */}

                        </Col>

                    </Row>
                </div>
            </Container>

            <Container>
                <div className="card col-12 col-lg-12 login-card mt-2 hv-center regBlock">

                    <div className="makeAccount">
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                {/* <LockOutlinedIcon /> */}
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
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
                                            label="First Name"
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
                                            label="Last Name"
                                            name="lastName"
                                            value={lName}
                                onChange={(e) => setLName(e.target.value)}
                                            autoComplete="lname"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={< Checkbox value = "allowExtraEmails" color = "primary" />}
                                            label="I want to receive inspiration, marketing promotions and updates via email."/>
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
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                        <Box mt={5}>
                            {/* <Copyright /> */}
                        </Box>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Registration
