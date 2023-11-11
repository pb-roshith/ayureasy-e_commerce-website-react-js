import React from 'react'
import { Medicinecontext } from '../context/medicinecontext'
import { useContext } from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import CardUI from "./cardUI";

const Medicine = () => {

  const medicines = useContext(Medicinecontext)

  return (
    <>
      <div>
        <div style={{backgroundColor:'green', color:'#fff', padding:'10px', margin:'15px'}}>
          <p className='text-center display-6'> Discover natural remedies and holistic health solutions rooted in Ayurvedic wisdom.</p>
        </div>
        
      <Container>
      <Row>
        {medicines.map((i) => {
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

export default Medicine