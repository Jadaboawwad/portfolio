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
import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
import promo1 from 'assets/img/theme/promo-C.png'
import promo2 from 'assets/img/theme/promo-B.png'
import promo3 from 'assets/img/theme/promo-A.png'
import promo4 from 'assets/img/theme/promo-D.png'
// import promo4 from 'assets/img/theme/promo-D.png'

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js'
import CardsFooter from 'components/Footers/CardsFooter.js'

// index page sections
import Download from '../IndexSections/Download.js'

class Landing extends React.Component {
  state = {}
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white">
                        Jad's Passion in Technology
                      </h1>
                      <p className="lead text-white">
                       
The advancements in industrial technology and daily-use applications have captivated my interest, particularly in the realms of Mechatronics, Artificial Intelligence, Internet of Things, and Application Development. The allure of these domains is profound, as they offer boundless opportunities to deploy real-world applications that can significantly impact our lives. Each endeavor within these fields is a step towards harnessing the potential of modern technology to solve complex challenges and contribute to societal progress.
                      </p>
                      <div className="btn-wrapper">
                        <p className="display-3 text-white">
                          Projects I have Done during my learning Jouerny of Mechatronics Engineering
                          
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>

          <section className="section section-xlg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <img alt="..." className="img-fluid floating" src={promo1} />
                </Col>
                <Col className="order-md-2" md="5">
                  <div className="pr-md-5">
                    <h3>Industrial Electronic Maintainance</h3>
                    <p style={{fontSize:20}}>
                      The Main and startup major of experience I had as Maintenance Engineer
                      at AlAtti Electronics Foundation in Amman, Jordan.

                      This Journey included field of experience in Industrial Maintenance
                      for Power Electronics devices and Electrical Drive systems such 
                      as Inverters , DC drive Systems and AC drive systems.

                      In this jouerny I trained on systems diagnosing and troubleshooting computerized
                      systems using manual and test equipment by following critical thinking behavior
                      during the analysis process until detecting the source of problem and make a 
                      decision with contributing with Eng.AlAtti whom the owner and the main
                      Maintenance Engineer in the Foundation
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container style={{ marginTop: 50 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>BioHeumo</h3>
                    <p style={{fontSize:20}}>
                      BioHeumo is bionic Arm design for a medical equipment used
                      as Prostheses replace the amputated limb From elbow to wrist 
                      with functional electronic system deployed using electromyography
                      Technology which detect the bio-electric signal produced when 
                      the user restrict the muscle to do a certain activity on it.
                    </p>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={promo2} />
                </Col>
              </Row>
            </Container>
            <Container style={{ marginTop: 50 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <img alt="..." className="img-fluid floating" src={promo4} />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pr-md-5">
                    <h3>MoboRobot</h3>
                    <p style={{fontSize:20}}  >
                      Its the MoboRobot, a mobile robot with camera can be driven
                      using a control panel deployed on local server with the streaming 
                      of the camera can be shown.

                      from scratch I made a special python modules for the robot to be
                      driven with multiple ways, Laptop keyboard or mobile phone server
                      streaming
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container style={{ marginTop: 50 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>ProHeart</h3>
                    <p style={{fontSize:20}}>
                      Its an electronic design for heart rate measurement using 
                      heart rate sensor and conditioning circuit produced 
                      especially for that reason, it can be used easily with
                      interactive interface using Infrared Technology
                    </p>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={promo3} />
                </Col>
              </Row>
            </Container>

          </section>

        </main>
      </>
    )
  }
}

export default Landing
