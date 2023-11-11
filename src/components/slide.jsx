import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Slide = () => {
  return (
    <>
    <Container style={{marginTop:'150px', marginBottom:'50px'}}>
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
    </Container>
    </>
  )
}

export default Slide