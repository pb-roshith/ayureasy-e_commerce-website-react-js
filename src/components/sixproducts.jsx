import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const imgData = [
  {
    id: 1,
    img:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699795260/ayurveda/2_1200x-fotor-20231112184634_ok3r22.jpg'
  },
  {
    id: 2,
    img:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699795260/ayurveda/Zandu-Giloy-_60-Caps_12b4cfc2-3b94-47d0-81be-c46c46999b72-fotor-20231112184826_d5ckoo.jpg'
  },
  {
    id: 3,
    img:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699795260/ayurveda/chyawanprash-2kg_1-fotor-20231112184926_wdl0ne.jpg'
  },
  {
    id: 4,
    img:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699795258/ayurveda/924d1595089747dabd6cbad2d36c3063-fotor-20231112184517_akzshv.jpg'
  },
  {
    id: 5,
    img:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699795257/ayurveda/Kesari-Kalp-1-kg-Pack-of-2-1-fotor-20231112184756_fnwaqi.jpg'
  }
]

const Sixproducts = () => {
  return (
    <>
      <div className='mt-4'>
        <Container>
          <Row>
            {imgData.map((i) => {
              return(
                <Col>
                  <img style={{height:'200px'}} src={i.img} alt="" />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Sixproducts