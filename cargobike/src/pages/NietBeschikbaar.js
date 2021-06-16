/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';

function NietBeschikbaar() {
  
  // const event = new Event('showLogdOutHeader');
  // window.dispatchEvent(event);
  
  return (
    <div className="bezDashboard">
      
      <Container className="NietBeschikbaar">
            <h1 className="NietBeschikbaarTitle">Sorry, deze pagina is niet beschikbaar binnen het huidige prototype.</h1>
            <a href="javascript: history.go(-1)">
                    <Button onclick="javascript: history.go(-1)"><ArrowBackIcon/> Terug</Button>
                    </a>
      </Container>
      <>
      </>
    </div>
  );
}

export default NietBeschikbaar;
