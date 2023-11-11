import React from 'react'
import { useContext } from 'react'
import { Drinkscontext } from '../context/drinkscontext'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Drinks = () => {
  const drinks = useContext(Drinkscontext);
  return (
    <>
      <div>
      <div style={{backgroundColor:'green', color:'#fff', padding:'10px', margin:'15px'}}>
          <p className='text-center display-6'> Rejuvenate with our selection of Ayurvedic beverages that promote well-being and vitality.</p>
        </div>
      <Container>
      <Row>
        {drinks.map((i) => {
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

export default Drinks