import React from 'react'
import { useContext } from 'react'
import { Medicinecontext } from '../context/medicinecontext'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Newrelease = () => {
    const medicine = useContext(Medicinecontext)
  return (
    <Container fluid>
            <p className='display-6'>Discount Upto 30%</p>
            <Row>
        {medicine.map((i) => {
          if (i.id < 27) {
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

export default Newrelease