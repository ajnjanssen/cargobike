import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { MdDelete } from 'react-icons/md'
import { db } from '../../components/firebase/Firebase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));

function FirstInQueueDelivery() {
      const classes = useStyles();

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
            if(reserveringen.length){
            return (
                  <div>
                      <Container>
                       <div className="Card_First_Delivery box">
                      <Row>
                            <Col xs={8}>
                               <h1 className="Card_title">Volgende zending</h1> 
                         </Col>
                              <div>
                                    <Row className="extra-padding-card">
                                          <Col xs={4}>
                                                <IconContext.Provider value={{ color: "#838383", className: "Delete_icon", size: "2em" }}>
                                                </IconContext.Provider>
                                          </Col>
                                          <Col xs={10} className="Cargobike_type_det">
                                                <h1 className="Dikgedrukt">{reserveringen[0].reservering.type}</h1> 
                                                <h2>Gereserveerd op: 20-05-2021</h2> 
                                          </Col>
                                          <Col xs={8} className="Cargobike_res_details">
                                                <h1 className="Dikgedrukt">Naar {reserveringen[0].reservering.adres}</h1> 
                                                <h2 className="Grey_text">{reserveringen[0].reservering.postcode}</h2>
                                                <h3 className="Green_text">{reserveringen.length} pakketten</h3>  
                                          </Col>
                                          <Col xs={4} className="Cargobike_res_details">
                                                <h1 className="Dikgedrukt">{reserveringen[0].reservering.datum}</h1> 
                                                <h2>{reserveringen[0].reservering.tijd}</h2>
                                          </Col>

                                          <Col xs={8} className="Res_wijzigen">
                                                <h3 className="TextRes_Wijzigen">Zending wijzigen  <ArrowForwardIcon style={{ fontSize: 20, color:'#88C053' }} /></h3>
                                            </Col>
                                    </Row>
                              </div>
                 </Row>
            </div>
            </Container>
        </div>
      )
            } else {
                  return (<div></div>);
            }
}

export default FirstInQueueDelivery
