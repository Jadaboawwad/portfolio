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
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
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
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." className="rounded-circle" src={profile} />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4">
                      <div className="card-profile-actions py-4 mt-9">
                        <Button className="mr-5" color="info" href="https://www.linkedin.com/in/jadabuawwad/" target="_blank" size="md">
                          Connect In Linkedin
                        </Button>

                        <Button
                          className="mr-4 mt-3"
                          color="info"
                          href="https://drive.google.com/file/d/1G_DBOb2KL691nPgVD5Xg1r57J2cIEHbQ/view?usp=sharing"
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
                          <span className="heading">21</span>
                          <span className="description">Certificates</span>
                        </div>
                        <div>
                          <span className="heading">13</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">78</span>
                          <span className="description">Skills 💓</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jehad Abu Awwad <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Amman, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Mechatronics Engineer
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
                          Experienced Mechatronics Engineer with a strong background in both AI and software development. I have hands-on experience in implementing advanced
                          technologies using Python, with a focus on Artificial Intelligence, Machine Learning, Deep Learning, and Reinforcement Learning. On the software side, I
                          am also skilled in JavaScript and TypeScript, applying them in various software development projects. In terms of hardware implementation, I bring solid
                          expertise in Engineering, Power Electronics, Electrical Drives, Programmable Logic Controllers (PLCs), and Industrial Electronics. I hold a Diploma in
                          Industrial Electronics Engineering from Wadi Al-Seer Training College, and a Bachelor's in Mechatronics Engineering from Al-Balqa Applied University. I am
                          certified in Machine Learning from the American Canadian Board for Professional Training, and in Software Development through the LTUC - Abdul Aziz Al
                          Ghurair School of Advanced Computing (Code Fellows Program). I completed the Semiconductor Fundamentals Program organized by Princess Sumaya University
                          for Technology (PSUT) and Synopsys, where I earned 10 Purple Certificates across key areas such as CMOS, VLSI and Digital Design further strengthening my
                          knowledge in digital design and semiconductor engineering. My name reflects a personal devotion to disciplined routines, always striving to complete tasks
                          with focus and peace by the end of each day ❤️
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
