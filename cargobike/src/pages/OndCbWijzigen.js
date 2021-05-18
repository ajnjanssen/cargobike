import React from 'react';
import DashboardGreeting from './components/user/DashboardGreeting';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function OndCbWijzigen(props){

    const {naam} = props;

    return(
        <container>
            <row>
                <h1>Goedemorgen {naam}!</h1>
                <h2>Jouw reservering wijzigen!</h2>
            </row>
            <row>
                <h1>Nee, React. Ik weet niet waar je styled-components bestand is!</h1>
                
            </row>
            <row>
                <button>Reservering opslaan</button>
                <button>Reservering annuleren</button>
            </row>
        </container>
    )
}