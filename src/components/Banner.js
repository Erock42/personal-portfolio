import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

// useState and useEffect are hooks that allow you to add React function components

// toRotate is an array of text that will be displayed on the banner during the typing animation
// loopNum is the number of times the text will loop
// isDeleting is a boolean that will determine if the text or set is being deleted or not
// text and setText help to determine what letters show during typing animation
// period is the time it takes for the text to be typed out
// delta/setDelta is the time it takes for each letter to be typed out (randomized between 100 and 300 milliseconds)

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{"Hi I'm Eric!"} <span className="wrap">Web Developer</span></h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                        <button onClick={() => console.log('connect')}>"Let's Connect!"<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}