import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Modal 
  } from "@material-ui/core";
  import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
  import React, { useEffect, useState } from "react";
  import { Col, Container, Row } from "react-bootstrap";
  import { IconContext } from "react-icons/lib";
  import { MdDelete } from "react-icons/md";
  import { db } from "../firebase/Firebase";
  import Button from '@material-ui/core/Button';
  
  function NextInQueueDelivery() {
    const [reserveringen, setReserveringen] = useState([]);
    useEffect(() => {
      db.collection("reserveringen").onSnapshot((snapshot) => {
        setReserveringen(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            reservering: doc.data(),
          }))
        );
      });
    }, []);
  
    // heeft een specifieke doc nodig om te kunnen verwijderen
    // const handleDelete = () => {
    //       db.collection("reserveringen").doc("").delete().then(() => {
    //             console.log("Document successfully deleted!");
    //         }).catch((error) => {
    //             console.error("Error removing document: ", error);
    //         });
    // }
  
    const useStyles = makeStyles((theme) => ({
      root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      }, modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '4px'
      },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
  
    return (
      <div>
          <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Bezorging verwijderen</h2>
            <p id="transition-modal-description">Weet u zeker dat u deze bezorging ongedaan wilt maken?</p>
          <Row>
          <Col>
              <Button onClick={handleClose} variant="contained">
                Annuleren
                </Button>
              </Col>
              <Col>
              <Button onClick={handleClose} variant="contained" color="secondary">
                Verwijderen
                </Button>
              </Col>
          </Row>
          </div>
        </Fade>
      </Modal>
    </div>
        <Container>
          <div className="Card_bezorgingen box">
            <Row>
              <Col xs={12}>
                <h1 className="Card_title">Volgende bezorging</h1>
              </Col>
              {reserveringen.map(({ id, reservering }) => (
                <>
                  <List
                    component="nav"
                    className={classes.root}
                    aria-label="mailbox folders"
                  >
                    <ListItem button>
                      <ListItemText primary={reservering.adres} />
                      <ListItemText secondary={reservering.tijd} />
                      <ListItemText secondary={reservering.datum} />
  
                      <IconContext.Provider value={{ color: "#838383", className: "Delete_icon", size: "1.5em" }}>
                        <MdDelete onClick={handleOpen}/>
                       </IconContext.Provider>
                     
                    </ListItem>
                    <Divider />
            {reserveringen.map(({id, reservering}) => (
                  
                  <>
               <List component="nav" className={classes.root} aria-label="mailbox folders">
                  <ListItem button>
                  <ListItemText primary={reservering.adres} />
                  <ListItemText secondary={reservering.tijd} />
                  <ListItemText secondary={reservering.datum} />
                  
                  <IconContext.Provider value={{ color: "#838383", className: "Delete_icon", size: "1.5em" }}>
                      <MdDelete onClick={handleDelete}/>
                     </IconContext.Provider>

                  </ListItem>
                  <Divider />

                  </List>
                </>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
  
  export default NextInQueueDelivery;
  