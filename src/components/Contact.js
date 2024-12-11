import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formInitialDetails = {    
        firstName: '',
        lastName: '',
        email: '',
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
        
        try {
            const templateParams = {
                form_name: `${formDetails.firstName} ${formDetails.lastName}`,
                user_email: formDetails.email,
                message: formDetails.message,
                to_name: 'Eric', // Replace with your name
            };

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

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
                                <Col>
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
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;