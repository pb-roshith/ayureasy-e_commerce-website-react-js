import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CardUI = ({ productName, image, price, review, seller, detail }) => {
  const v = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginBottom: "80px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Card.Img style={{ height: "300px" }} variant="top" src={image} />
        <Card.Body>
          <hr />
          <Card.Title className="text-center">{productName}</Card.Title>
          <div style={{ margin: "20px" }} className="text-center">
            <Button onClick={() => handleShow(v)} size="lg" variant="success">
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <img style={{ height: "300px" }} src={image} alt="" />
              </Col>
              <Col xs={12} sm={12} md={6}>
                <p className="display-1">{productName}</p>
                <p className="h3">Price : {price}</p>
                <p className="h3">Rating : {review}</p>
                <p className="h3">seller: {seller}</p>
                <hr />
                <p className="lead display-6">{detail}</p>
              </Col>
            </Row>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Add To Cart
              </Button>
              <Button variant="success" size="lg">
                Buy Now
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardUI;
