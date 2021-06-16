/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

import "../OndReservering.css";
import "../BezDashboard.css";
import "../TrackTrace.css";
import TrackTraceGreeting from "../components/user/TrackTraceGreeting";
import CurrentAgenda from "../components/employee/CurrentAgenda";
import HisZending from "../components/HisZending";


//Styling
import styled from "styled-components";

//Components
import GoogleMap from "../components/GoogleMap";
import CbStatCard from "../components/CbStatCard";
import OnderdeelStatus from "../components/OnderdeelStatus";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EventNoteIcon from "@material-ui/icons/EventNote";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { storage } from "../components/firebase/Firebase";
import firebase from 'firebase';
// import { app } from './base'

const Scrollbar = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Scrollbar_item = styled.div`
  margin: 20px;
`;

const Contentbox = styled.div`
  margin-top: 5vh;
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  color: black;
`;

const ContentBox_h1 = styled.h1`
  color: #88c053;
  font-size: 20px;
  font-weight: 600;
`;

const ContentBox_p = styled.p`
  color: #838383;
  font-weight: 600;
  font-size: 14;
  margin: 0;
  padding: 0;
`;

const ContentBottom = styled.div`
  margin-top: 5vh;
  background-color: white;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  display: inline-block;
  color: black;
`;

const ButtonContainer = styled.div`
  margin: 3%;
  float: right;
`;

const ListRedirects = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;

  > .MuiButton-root {
    min-width: 350px;
    background-color: #796ff6;
    text-transform: none;
    height: 45px;
    border-radius: 8px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  > .MuiList-root {
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 1%), 0 6.7px 5.3px rgb(0 0 0 / 1%),
      0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 1%),
      0 41.8px 33.4px rgb(0 0 0 / 1%), 0 100px 80px rgb(0 0 0 / 2%);
  }
`;

const Info_box = styled.div`
  background-color: #f5faf1;
  border-radius: 13px;
  padding: 8px;
  width: 5.7em;
  overflow: hidden;
  margin-left: 25px;
  margin-bottom: 9px;
  height: 59px;
`;
const Info_label = styled.p`
  color: #838383;
  font-weight: 600;
  font-size: 18;
  margin: 0px;
  margin-left: 0px;
`;

const Info_data = styled.p`
  color: #88c053;
  font-weight: 400;
  font-size: 16;
  margin: 0px;
`;

const Info_image = styled.img`
  width: 100%;
`;
const CheckBoxes = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0;
`;

const IndBox = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  > p {
    margin-top: 16px;
  }
`;

const UploadImage = styled.div`

border-radius:4px;
  display: flex;
  justify-content: left;
  align-items:center;
  margin-top: 20px;
  > svg.MuiSvgIcon-root {
    font-size: 40px !important;
  }
  > p {
      margin-top:15px;
        display:flex;
        justify-content: center;
  }

`

const UploadText = styled.div`
margin-top:20px;
margin-bottom:-20px;
    display:flex;
    justify-content:left;
`

const TextFieldProps = styled.div`
> .MuiFormControl-root {
    width:100%;
}
`

function BezDashboard(imageName) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const [batterij, setBatterij] = React.useState(true);
  const [banden, setBanden] = React.useState(true);
  const [omschrijving, setOmschrijving] = React.useState('');
//   const [afbeelding, setAfbeelding] = storage().ref(imageName);

const db = firebase.firestore()

  const [fileUrl, setFileUrl] = useState(null);

  
  
  const onFileChange = async (e) =>{
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL());
    
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
        setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("meldingen").doc().set({
        afbeelding: fileUrl,
        desc: omschrijving,
        batterij: true,
        banden: "C1"
        });
      
      setOpen(false);
};

const [meldingen, setMeldingen] = useState([]);

// useEffect(() => {
//     db
//         .collection('meldingen')
//         .onSnapshot(snapshot => {
//             setMeldingen(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 melding: doc.data(),
//             })
//             ));
//         })
//     }, []);
    

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // this event dispatcher gives the event listner the news we want a certain navigation for this user.
  const event = new Event("showNavbarBez");
  window.dispatchEvent(event);

  const history = useHistory();
  
  return (
    <div className="bezDashboard">
        
      <TrackTraceGreeting />

      <Container className="Title_track">
        <Row>
          <Col xs={12} md={8}>
            <h1 className="BezorgerTitles">Bekijk je vorige zendingen</h1>
          </Col>
        </Row>
      </Container>

      <HisZending />



      
      <>
      
      </>
    </div>
  );
}

export default BezDashboard;
