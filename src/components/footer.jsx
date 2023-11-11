import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div
        className="m-0 p-5"
        style={{ backgroundColor: "#00FF00", color: "#fff" }}
      >
        <Container className="lead">
          <Row>
            <Col xs={12} md={6} lg={3}>
              <h1>ABOUT</h1>
              <p>
                Ayurveda e-commerce website with integrated chatbot for symptom
                suggestions. Users can find products based on symptoms, and the
                chatbot generates short descriptions, enhancing their shopping
                experience.
              </p>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h1>CONTACT</h1>
              <p>9940504856</p>
              <p>roshithindia@gmail.com</p>
              <p>8838316164</p>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h1>PRODUCTS</h1>
              <p>Drinks</p>
              <p>Foods</p>
              <p>Medicine</p>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h1>CHATBOT</h1>
              <p>Recommand Products</p>
              <p>Foods for peoples symptoms</p>
              <p>Suggest Medicine</p>
            </Col>
          </Row>

          <hr style={{ border: "3px solid" }} />

          <div className="text-center mt-3">
            <p>@Copyrights {new Date().getFullYear()}</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
