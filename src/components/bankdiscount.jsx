import React from 'react'
import {SiStarlingbank, SiThurgauerkantonalbank} from 'react-icons/si'
import { Container, Row, Col } from 'react-bootstrap'

const Bankdiscount = () => {
  return (
    <>
        <div>
            <Container fluid>
                <Row style={{border:'1px solid grey', padding:'15px'}}>
                    <Col xs={6} sm={12} md={6} lg={3}>
                        <h1><SiStarlingbank style={{fontSize:'70px'}}/> POWERPRO Card</h1>
                    </Col>
                    <Col xs={6} sm={12} md={6} lg={3}>
                        <p>15% Grand Discount</p>
                        <p className='lead'>with POWERPRO Credit Card</p>
                    </Col>
                    <Col xs={6} sm={12} md={6} lg={3}>
                        <h1><SiThurgauerkantonalbank style={{fontSize:'70px'}}/> EXPRESS Card</h1>
                    </Col>
                    <Col xs={6} sm={12} md={6} lg={3}>
                        <p>25% Grand Discount</p>
                        <p className='lead'>with EXPRESS Credit Card</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Bankdiscount