import {Col, Container, Row} from 'react-bootstrap'
import './Registration.css';
import React, {useState, useEffect} from "react";
import {auth} from './firebase/Firebase';

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
                } else{
                    return authUser.updateProfile({
                        displayName : fName,
                    })
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
               return authUser.user.updateProfile({
                   displayName: fName
               }) 
            })
            .catch((error) => alert(error.message));
    }

    const signIn = (event) =>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
    }

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

                <div className="card col-12 col-lg-4 login-card mt-2 hv-center regBlock">
                    <div className="makeAccount">
                        <h1>Account aanmaken</h1>
                    </div>
                    <form>

                        <div className="form-group text-left regInput">
                            <label htmlFor="exampleInputEmail1">Voornaam</label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}
                                placeholder="Vul uw voornaam in"/> {/* <small id="emailHelp" className="form-text text-muted">Vul uw voornaam in</small> */}
                        </div>

                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Achternaam</label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={lName}
                                onChange={(e) => setLName(e.target.value)}
                                placeholder="Vul uw achternaam in"/> {/* <small id="emailHelp" className="form-text text-muted">Vul uw achternaam in</small> */}
                        </div>

                        {/* <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Geboortedatum</label>
                            <Form.Control type="date" name='date_of_birth'/>
                            <small id="emailHelp" className="form-text text-muted">Vul uw geboortedatum in</small>
                        </div> */}

                        <hr></hr>

                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">Uw e-mail adres wordt veilig bewaard.</small>
                        </div>

                        <div className="form-group text-left">

                            <label htmlFor="exampleInputPassword1">Wachtwoord</label>
                            <small id="emailHelp" className="form-text text-muted">minimaal 8 karakters, 1 getal en 1 speciaal teken.</small>

                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Wachtwoord"/>

                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Bevestig Wachtwoord</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Bevestig Wachtwoord"/>
                        </div>
                        <button type="submit" onClick={signUp} className="btn btn-primary">
                            Registreer account
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Registration
