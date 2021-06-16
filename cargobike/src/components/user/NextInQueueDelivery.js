import { Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { MdDelete } from 'react-icons/md'
import { db } from '../firebase/Firebase';

function NextInQueueDelivery() {

      const [reserveringen,
            setReserveringen] = useState([]);
        useEffect(() => {
            db
                .collection('reserveringen')
                .onSnapshot(snapshot => {
                    setReserveringen(snapshot.docs.map(doc => ({
                        id: doc.id,
                        reservering: doc.data()
                    })));
                })
            }, []);

            // heeft een specifieke doc nodig om te kunnen verwijderen
            const handleDelete = () => {
                  db.collection("reserveringen").doc("").delete().then(() => {
                        console.log("Document successfully deleted!");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
            }

            const useStyles = makeStyles((theme) => ({
                  root: {
                    width: '100%',
                    maxWidth: 360,
                    backgroundColor: theme.palette.background.paper,
                  },
                }));
                const classes = useStyles();
    return (
        <div>
            <Container>
             <div className="Card_bezorgingen box">
            <Row>
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
    )
}

export default NextInQueueDelivery
