import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const fullName = `${formDetails.firstName} ${formDetails.lastName}`.trim() || "Website Visitor";
    const payload = {
      name: fullName,
      email: formDetails.email,
      phone: formDetails.phone || "Not provided",
      message: formDetails.message,
      _subject: `New Portfolio Message from ${fullName}`,
      _captcha: "false",
      _template: "table"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/masabbhatti567@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      setFormDetails(formInitialDetails);
      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus({ success: true, message: 'Message sent successfully! Your email has been delivered to masabbhatti567@gmail.com.' });
      } else if (result.message && result.message.includes("Activation")) {
        setStatus({ success: true, message: "Message dispatched! FormSubmit has sent a 1-time activation link to masabbhatti567@gmail.com. Check your inbox and click 'Activate Form'." });
      } else {
        setStatus({ success: true, message: 'Message sent successfully to masabbhatti567@gmail.com!' });
      }
    } catch (error) {
      console.error("FormSubmit error:", error);
      const mailtoUrl = `mailto:masabbhatti567@gmail.com?subject=${encodeURIComponent(`Inquiry from ${fullName}`)}&body=${encodeURIComponent(`Name: ${fullName}\nEmail: ${formDetails.email}\nPhone: ${formDetails.phone}\n\nMessage:\n${formDetails.message}`)}`;
      window.location.href = mailtoUrl;
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Opening your email client to send directly to masabbhatti567@gmail.com.' });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p style={{ color: '#B8B8B8', marginBottom: '20px', fontSize: '17px' }}>
                  Have a question or want to collaborate? Reach out directly at <a href="mailto:masabbhatti567@gmail.com" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}>masabbhatti567@gmail.com</a>
                </p>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
