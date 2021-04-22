import {Col, Container, Row} from 'react-bootstrap'
import './Registration.css';
import React, {useState, useEffect} from "react";
import { auth } from './firebase/Firebase';

function Login() {

    return (
        <div>
            <Container>
                <div>
                    <Row>
                        <Col className="RowLogo">
                            <h1 className="logoRegistration">LOGO CARGOBIKE</h1>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="card col-12 col-lg-4 login-card mt-2 hv-center regBlock">
                    <div className="makeAccount">
                        <h1>Inloggen</h1>
                    </div>
                    <form>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"/>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Wachtwoord</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Wachtwoord"/>
                            <small id="emailHelp" className="form-text text-muted">Wachtwoord vergeten?</small>
                        </div>
                        <button 
                        // onClick={signIn} 
                        type="submit" className="btn btn-primary">
                            Log in
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
