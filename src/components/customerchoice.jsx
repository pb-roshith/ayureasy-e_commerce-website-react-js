import React from 'react'
import { useContext } from 'react'
import { Foodcontext } from '../context/foodcontext'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Customerchoice = () => {
    const foods = useContext(Foodcontext)
  return (
    <Container fluid>
            <p className='display-6'>Customer's Choice</p>
            <Row>
        {foods.map((i) => {
          if (i.id > 13 && i.id < 20) {
            return (
              <Col xs={12} sm={6} md={4} lg={2}>
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
          } else {
            return null;
          }
        })}
      </Row>
        </Container>
  )
}

export default Customerchoice