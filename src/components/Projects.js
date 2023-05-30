import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            name: "Project 1",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            name: "Project 2",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            name: "Project 3",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            name: "Project 1",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            name: "Project 2",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            name: "Project 3",
            description: "Design & Development",
            imgUrl: projImg3,
        },

    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the go-to generic text for typesetting over the years, when an unknown printer took a galley of type and scrambled it to make a specimen book. </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                           </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background-image-right" />
        </section>
 )
}