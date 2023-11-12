import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

const Slide = () => {
  return (
    <>
    <Container style={{marginTop:'150px', marginBottom:'50px'}}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
        <Carousel>
      <Carousel.Item interval={500}>
        <img style={{width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1698940243/ayurveda/WhatsApp_Image_2023-11-02_at_7.36.17_PM_ktfibd.jpg" alt='' />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1698940251/ayurveda/WhatsApp_Image_2023-11-02_at_7.55.21_PM_gwzix4.jpg" alt='' />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1698940260/ayurveda/WhatsApp_Image_2023-11-02_at_8.29.00_PM_ja2zim.jpg" alt='' />
        
      </Carousel.Item>
    </Carousel>
    
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
        <img style={{width:"100%"}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699764749/ayurveda/WhatsApp_Image_2023-11-10_at_8.38.03_PM_ssfmkq.jpg" alt="" />
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Slide