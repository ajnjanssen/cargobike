import {Col, Container, Row} from 'react-bootstrap'
import './Registration.css';
import React, {useState, useEffect} from "react";
import { auth } from './firebase/Firebase';

function Login() {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser){
          console.log(authUser);
          setUser(authUser);
          if(authUser.displayName){
              console.log("succes ingelogd " + authUser.displayName)
        } else{
            return authUser.updateProfile({
                displayName: username,
            })
          }
        } else{
          setUser(null);
        }
      })
      return () => {
        unsubscribe();
      }
    }, [user, username])
  
    const signIn = (event) => {
      event.preventDefault();
  
      auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
  
    };

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
                <div className="card col-12 col-lg-12 login-card mt-2 hv-center regBlock">
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
                                placeholder="Enter email"
                                value={email}
                onChange={(e) => setEmail(e.target.value)}
                                />
                                
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Wachtwoord</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Wachtwoord"
                                value={password}
                onChange={(e) => setPassword(e.target.value)}
                                />
                            <small id="emailHelp" className="form-text text-muted">Wachtwoord vergeten?</small>
                        </div>
                        <button 
                        // onClick={signIn} 
                        type="submit" onClick={signIn} className="btn btn-primary">
                            Log in
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
