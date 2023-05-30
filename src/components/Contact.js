import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {    
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState({});
const [status, setStatus] = useState({});
    
const onFormUpdate = (category, value) => { 
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = () => {
    
}

//const [formErrors, setFormErrors] = useState({});
//const [formValidity, setFormValidity] = useState({});

return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col size={12} md={6}>
                    <h2>Get In Touch!</h2>
                    <form>
                        <Row>
                            <Col sm={6} classname="px-1">
                                <input type="text" value={formDetals.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>                      
                            </Col>
                            <Col sm={6} classname="px-1">
                                <input type="text" value={formDetals.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} classname="px-1">
                                <input type="email" value={formDetals.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} classname="px-1">
                                <input type="tel" value={formDetals.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>

                        //status of message sent; false returns danger, otherwise is successful
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
)
}
