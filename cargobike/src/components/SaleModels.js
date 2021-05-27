import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import placeholder from '../img/Placeholder.png';

import bike from '../img/bike.jfif';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import tileData from './tileData'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      WebkitOverflowScrolling: 'touch'
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

function SaleModels() {
    const classes = useStyles();

    return (
        <div>
            <Container>
<HeaderTitle>Huur een cargobike</HeaderTitle>
<Row style={{paddingLeft:'20px'}}>

<ScrollingWrapper>
{/* <Card style={{ width: '22rem' }} className="Cargobike_box box">
            <Card.Body>
            <h1 className="Cargobike_title">Cargobike</h1> 
            <h2>Standaard</h2> 

            <Row className="Cargobike_spec_box">
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Radius</h2>
                <h3 className="Cargo_spec_det">40 kilometer</h3>
                </Col>
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Capaciteit</h2>
                <h3 className="Cargo_spec_det">120 liter</h3>
                </Col>
            </Row>

            </Card.Body>
            <Card.Img variant="top" src={bike} />
        </Card>

        <Card style={{ width: '22rem' }} className="Cargobike_box box">
            <Card.Body>
            <h1 className="Cargobike_title">Cargobike</h1> 
            <h2>Standaard</h2> 

            <Row className="Cargobike_spec_box">
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Radius</h2>
                <h3 className="Cargo_spec_det">40 kilometer</h3>
                </Col>
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Capaciteit</h2>
                <h3 className="Cargo_spec_det">120 liter</h3>
                </Col>
            </Row>

            </Card.Body>
            <Card.Img variant="top" src={bike} />
        </Card> 
        <Card style={{ width: '22rem' }} className="Cargobike_box box">
            <Card.Body>
            <h1 className="Cargobike_title">Cargobike</h1> 
            <h2>Standaard</h2> 

            <Row className="Cargobike_spec_box">
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Radius</h2>
                <h3 className="Cargo_spec_det">40 kilometer</h3>
                </Col>
                <Col className="Cargo_specs">
                <h2 className="Cargo_spec_text">Capaciteit</h2>
                <h3 className="Cargo_spec_det">120 liter</h3>
                </Col>
            </Row>

            </Card.Body>
            <Card.Img variant="top" src={bike} />
        </Card>  */}
<GridList className={classes.gridList} cols={2.5}>

{tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
            
          </GridListTile>
        ))}
        <GridListTile>
          
              <Card.Img variant="top" src={bike} />
         
        </GridListTile>
        
      </GridList>
    
</ScrollingWrapper>
</Row>

</Container>


        </div>
    )
}

export default SaleModels

const ScrollingWrapper = styled.div`

padding-bottom:80px;
/* padding-top:50px; */
/* overflow: hidden; Hide scrollbars */
  
`

const HeaderTitle = styled.div`
margin-top:30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 30px;
    margin-left:25px;
    color:grey;
    /* color: white; */
    > * {
        grid-column: 2 / -2;
    }
    > .full {
        grid-column: 1 / -1;
    }
`

const hs = styled.div`
display: grid;
  grid-gap: 10px;
  grid-template-columns:
    10px
    repeat(6, calc(50% - 40px))
    10px;
  grid-template-rows: minmax(150px, 1fr);
  padding: 0 20px;
  margin-right: 20px;
`