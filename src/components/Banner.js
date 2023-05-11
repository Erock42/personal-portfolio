import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/studying.png";

// useState and useEffect are hooks that allow you to add React function components

// toRotate is an array of text that will be displayed on the banner during the typing animation
// loopNum is the number of times the text will loop
// isDeleting is a boolean that will determine if the text or set is being deleted or not
// text and setText help determine what letters show during the typing animation
// period is the time it takes for the text to be typed out
// delta/setDelta is the time it takes for each letter to be typed out (randomized between 100 and 300 milliseconds)

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    // This 'tick' function will determine when the loop should end and when the text should be deleted
    // If the text is being deleted, it will delete it all; otherwise it will type out the next set of text
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fulltext) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum => loopNum + 1);
            setDelta(500);
        }
    }

//in-line styling for the header image (Background)
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello, I'm Eric!</span>
                        <h1>{"I'm a "} <span className="wrap">{text}</span></h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                        <button onClick={() => console.log('connect')}>"Let's Connect!"<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImg} width={400} height={400} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}