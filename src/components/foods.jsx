import React from 'react'
import { useContext } from 'react'
import { Foodcontext } from '../context/foodcontext'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Foods = () => {

    const foods = useContext(Foodcontext);

  return (
    <>
      <div>
      <div style={{backgroundColor:'green', color:'#fff', padding:'10px', margin:'15px'}}>
          <p className='text-center display-6'> Explore the flavors of Ayurveda with our range of balanced and nourishing foods.</p>
        </div>
      <Container>
      <Row>
        {foods.map((i) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3}>
                <CardUI
                  productName={i.productName}
                  image={i.image}
                  price={i.price}
                  review={i.review}
                  seller={i.seller}
                  detail={i.detail}
                />
              </Col>
            );
          
        })}
      </Row>
        </Container>
      </div>
    </>
  )
}

export default Foods