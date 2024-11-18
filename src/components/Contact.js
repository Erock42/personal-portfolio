import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//'import { MailchimpSubscribe } from 'react-mailchimp-subscribe';'//


const url = process.env.REACT_APP_MAILCHIMP_URL;

export const Contact = () => {
    const formInitialDetails = {    
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState('Send Message');
const [status, setStatus] = useState({});
    
const onFormUpdate = (category, value) => { 
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

  const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      let response = await fetch("/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ succes: true, message: 'Message sent successfully'});
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
    };

//const [formErrors, setFormErrors] = useState({});
//const [formValidity, setFormValidity] = useState({});

return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
               <Col className="pesky-contact" size={12} md={6}>
                    <h2>Get In Touch!</h2>
          <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>                      
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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
                   //MailchimpSubscribe url
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default Contact;