/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/team-4-800x800.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-9">
                        <Button
                          className="mr-5"
                          color="info"
                          href="https://www.linkedin.com/in/jadabuawwad/"
                          target="_blank"
                          size="md"
                        >
                          Connect In Linkedin
                        </Button>

                        <Button
                          className="mr-4 mt-3"
                          color="info"
                          href="#pablo"
                          href="https://bauniversity-my.sharepoint.com/:w:/g/personal/31815018509_std_bau_edu_jo/EYdI5HSOckRIrhjw9TbOEQsBI0A1kENTOijGWiwOVk-4iQ?e=ZStT4M"
                          target="_blank"
                          size="md"
                        >
                          Check My Curriculum Vitae
                        </Button>

                      </div>
                    </Col>

                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">12</span>
                          <span className="description">Certificates</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">50</span>
                          <span className="description">Skills 💓</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jad Abu Awwad{" "}
                      <span className="font-weight-light">, 26</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Amman, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software and Quality Engineer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Al Balqa Applied University
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Experienced Mechatronics Engineer with a demonstrated history of working in AI and Software development.

                          In Software Implementations I am skilled in Python with its applications in Artificial Intelligence, Machine Learning, Deep Learning and Reinforcement Learning.

                          also I am skilled in JavaScript & TypeScript with its applications Software Development fields

                          In the Hardware Implementations I am skilled in Engineering, Power Electronics , Electrical Drive, Programmable logic controllers and Industrial Electronics.

                          Strong Engineering Skills with a Diploma of Industrial Electronics Engineering from Wadi Al-Seer Training Collage and Bachelor's of Mechatronics Engineering from Al Balqa Applied University

                          Certified in Machine Learning with American Canadian board for professional training and Software Development from LTUC-Abdul Aziz Al Ghurair School of Advanced Computing with Code fellows program.

                          My name meaning is a personal devotion at routine discipline which leads to be the person who loves to live in peace with completing all tasks at the end of that day ❤️
                        </p>
                      
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default Profile;
