import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/masab-rehman-a436b0297" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved — Masab Rehman</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
