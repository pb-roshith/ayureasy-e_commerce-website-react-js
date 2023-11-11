import React from 'react'
import { useContext } from 'react'
import { Drinkscontext } from '../context/drinkscontext'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Mostsold = () => {
    const drinks = useContext(Drinkscontext)
  return (
    <Container fluid>
            <p className='display-3'>Most Sold</p>
            <Row>
        {drinks.map((i) => {
          if (i.id < 42) {
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

export default Mostsold