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
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import promo2 from "assets/img/theme/promo-2.png";
import promo3 from "assets/img/theme/promo-3.png";
import promo4 from "assets/img/theme/promo-4.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

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
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
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
                          Projects I have Done during my learning Jouerny of Web
                          development and Machine Learning
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Disease Discovery
                          </h6>
                          <p className="description mt-3">
                            Machine Learning - Classification: Exploratory
                            analysis and disease classification for tow diseases
                            datasets which are the hepatitis and stroke and
                            comes up with tow well trained classification models
                            with a very good evaluation metrics valuesaround 96%
                            for both models and ready to be deployed in
                            production of disease discovery application.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              VSCODE
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Python
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Poetry
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Jupyter Lab
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Sklearn
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Numpy
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Pandas
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://github.com/machine-learning-solutions/disease_discovery"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-4"
                              color="primary"
                            >
                              Github
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            People Thinks
                          </h6>
                          <p className="description mt-3">
                            Deep Learning - Natural Language processing : a
                            Study collecting Facebook comments data from
                            multiple social resources in Jordan about what
                            Jordanian thinks in the interval between 6-9/2022
                            during the universal closure , detects most similar
                            word to the thoughts of Jordanian.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              VSCODE
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Python
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Poetry
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Jupyter Lab
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              gensim
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              nltk
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              numpy
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              pandas
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://github.com/machine-learning-solutions/people_thinks"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-4"
                              color="primary"
                            >
                              Github
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>



                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Machine Learning Projects
                          </h6>
                          <p className="description mt-3">
                            Week of Machine learning studies with set of
                            projects of data wrangling and Visualization with
                            tasks of regression and classifcation
                          </p>
                          <a
                            target="_blank"
                            href="https://github.com/machine-learning-solutions/data_visualisation"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-3"
                              color="primary"
                            >
                              Data Visualization
                            </Button>
                          </a>
                          <a
                            target="_blank"
                            href="https://github.com/machine-learning-solutions/house_price_regression"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-3"
                              color="primary"
                            >
                              House price regression
                            </Button>
                          </a>
                          <a
                            target="_blank"
                            href="https://github.com/machine-learning-solutions/disease_discovery"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-3"
                              color="primary"
                            >
                              Disease Discovery
                            </Button>
                          </a>
                        </CardBody>
                      </Card>

                    </Col>
                    <Col>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Game of a greed
                          </h6>
                          <p className="description mt-3">
                            The Game of greed a python application is a game you
                            can play with your Command Line Interface a greed
                            game with scoring you and if you get 10000 point you
                            win
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Python
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Pytest
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Poetry
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Flake8 Black
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://github.com/jaa-games/game_of_greed"
                          >
                            <Button className="mt-4" color="primary">
                              GitHub
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>

                  </Row>


                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            City explorer
                          </h6>
                          <p className="description mt-3">
                            CityExplorer is web application can be used to
                            explorer any city of the world be get information
                            about the weather with related movies about the city
                            name you entered
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML JavaScript CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Cache
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Github
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Travel
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Backend API's
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jadabuawwad-city-explorer.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Can Of Books
                          </h6>
                          <p className="description mt-3">
                            Can Of Books is a web application that you can use
                            to store and remember your books that you intrested
                            in by sign up using your Google account and you will
                            have your own Container of books.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML CSS JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Chache
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Mongose
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Auth0
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jadabuawwad-can-of-books.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Flowers Club
                          </h6>
                          <p className="description mt-3">
                            Web App to store Flowers information, you can signup
                            with your google account and data of flowers will be
                            geatherd for you
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML JavaScript CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Auth0
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CRUD
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              MVC
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Backend API's
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jadabuawwad-flowers.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Photo Gallery
                          </h6>
                          <p className="description mt-3">
                            Application displays images and information of
                            horned animals Project and you can filter image by
                            name
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML CSS JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Cache
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Mongose
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Auth0
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jadabuawwad-photo-gallery.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Huddle
                          </h6>
                          <p className="description mt-3">
                            Huddle is a webpage online community network its a
                            web page for practising on styled component library
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TypeScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Next.js
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Styled Components
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jaa-huddle.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Country Quiz
                          </h6>
                          <p className="description mt-3">
                            a country quiz is an application for testing your
                            information about countries with fake data
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Next.js
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Styled Components
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://jaa-country-quiz.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Conduit
                          </h6>
                          <p className="description mt-3">
                            Conduit is an Application developed using React and
                            styled with Bootstrap also with state management
                            library called Redux , Its For rendering posts
                            retrieved from BackEnd API and filter it using Tag
                            selection, powerful protected application for simple
                            use.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TypeScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Yarn
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Redux.js
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JWT
                            </Badge>
                          </div>
                          <a
                            style={{ marginRight: 10 }}
                            target="_blank"
                            href="https://github.com/jaa-web-applications/conduit"
                          >
                            <Button className="mt-4" color="primary">
                              GitHub
                            </Button>
                          </a>
                          <a
                            target="_blank"
                            href="https://conduit-application.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Done With It
                          </h6>
                          <p className="description mt-3">
                            Done with It is a React Native Mobile Application as
                            a market for selling stuff you don't need any more,
                            It's a React Native Application works on mobile
                            phone Android or Iphone helps you finding things to
                            buy that others want to sell
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TypeScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              ReactNative
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Expo
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Native CSS
                            </Badge>
                          </div>
                          <a
                            target="_blank"
                            href="https://github.com/jaa-web-applications/done_with_it"
                          >
                            <Button
                              style={{ marginRight: 10 }}
                              className="mt-4"
                              color="primary"
                            >
                              Github
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Banksit Application
                          </h6>
                          <p className="description mt-3">
                            This is a web application based on HTML/CSS/JS by
                            native, serves as bank account for a user and has
                            multiple functionally like Transfer Money, Request
                            loan and Close Account
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TypeScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Yarn
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Redux.js
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JWT
                            </Badge>
                          </div>
                          <a
                            style={{ marginRight: 10 }}
                            target="_blank"
                            href="https://github.com/jaa-web-applications/banksit"
                          >
                            <Button className="mt-4" color="primary">
                              GitHub
                            </Button>
                          </a>
                          <a
                            target="_blank"
                            href="https://banksit.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3">
                          <h6 className="text-primary text-uppercase">
                            Banksit Website
                          </h6>
                          <p className="description mt-3">
                            Banksit Website based on native languages with
                            functionality of - Tabbed component - Menu fade
                            animation - Sticky navigation - Reveal sections -
                            Lazy loading images - Slider
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <a
                            style={{ marginRight: 10 }}
                            target="_blank"
                            href="https://github.com/jaa-web-applications/banksit-website"
                          >
                            <Button className="mt-4" color="primary">
                              GitHub
                            </Button>
                          </a>
                          <a
                            target="_blank"
                            href="https://web-banksit.netlify.app/"
                          >
                            <Button className="mt-4" color="primary">
                              Live
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container style={{ marginTop: 50 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>SeAssis</h3>
                    <p>
                      SeAssis is a web application which can help you in
                      requesting services from any place in Jordan like if you
                      lost in the road or you need a fuel or food or for home
                      services like plumping or electric issues, you can also
                      see the pending requests and contact us to provide you
                      with the service requester number and location and if you
                      help him you can resolve it on the dashboard also there is
                      email service activated when you request the service and
                      you can give us your feedback in the Intelligent feedback
                      section which will give you the sentment analyisis of your
                      feedback if it positve or negative depending on NLP Deep
                      learning Model.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/jaa-web-applications/seassis"
                    >
                      <Button
                        style={{ marginRight: 10 }}
                        className="mt-4"
                        color="primary"
                      >
                        Front End
                      </Button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/jaa-web-applications/seassis-backend"
                    >
                      <Button
                        style={{ marginRight: 10 }}
                        className="mt-4"
                        color="primary"
                      >
                        Back End
                      </Button>
                    </a>
                    <a target="_blank" href="https://seassis-web.netlify.app/">
                      <Button className="mt-4" color="success">
                        Live
                      </Button>
                    </a>
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
                  <img alt="..." className="img-fluid floating" src={promo3} />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pr-md-5">
                    <h3>PyArcade Games</h3>
                    <p>
                      Its a collection of Command line games for the purpose of
                      entertainment with different and special ideas deployed
                      with amazing ASCI art. PyArcade game is an application
                      provide an interesting experience of playing games like
                      the old fashioned style of the beginning of computer
                      invitation where the only black screen makes you have fun
                      and interact with computer.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/jaa-games/pyarcade_games"
                    >
                      <Button
                        style={{ marginRight: 10 }}
                        className="mt-4"
                        color="primary"
                      >
                        Github
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container style={{ marginTop: 50 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>AIMedica</h3>
                    <p>
                      AIMedica is a web application which can help you in
                      disease discovery from list of disease you can choose and
                      answering a questions related to it , and the website will
                      analysis your data with a very precise machine learning
                      classification model whom able to predict if you injured
                      with the disease or not and store your result in your
                      account that you registered with while you enter the
                      website for the first time.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/SuperbaTeam/ai-medica-front-end"
                    >
                      <Button
                        style={{ marginRight: 10 }}
                        className="mt-4"
                        color="primary"
                      >
                        Front End
                      </Button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/SuperbaTeam/ai-medica-back-end"
                    >
                      <Button
                        style={{ marginRight: 10 }}
                        className="mt-4"
                        color="primary"
                      >
                        Back End
                      </Button>
                    </a>
                    <a target="_blank" href="https://we-medica.vercel.app/">
                      <Button className="mt-4" color="success">
                        Live
                      </Button>
                    </a>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={promo4} />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Artificial Intelligence
                      </h4>
                      <p className="lead text-italic text-white">
                        The Humman Mind daily Tasks by classifcation regrression
                        or clustring things, and with attraction of Computer
                        Vison and Natrual Languages processing down to
                        Reinforcment Learning of Machines will be The Next
                        Revelution of science
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Artificial Intelligence Revolution</h3>
                    <p className="lead">
                      In the field of Machine Learning i have projects in
                      disease discovery, from stroke to hepatitis down to breast
                      cancer these are classifcation tasks my projects did with
                      high score of accurecy
                    </p>
                    <p>
                      In the field of Deep Learning i have projects in
                      implementaion of gloun CV Model to do tasks of object
                      detection or segmantion. also i have a project in the
                      field of Arabic Language processing which you can give it
                      a word and return what people was thinking about depending
                      on strucured data fetched from Facebook
                    </p>
                    <p>
                      In Reinforcement learning i practise about how we can
                      implement real life models in Robotics using ROS which
                      will lead to create datasets that machines can learn from
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container style={{ marginBottom: 125 }}>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        Lets Make a Deal!
                      </h4>
                      <p className="text-white">
                        The Projects never end and the science still growning
                        and i never mind to give you a support in any of these
                        fields
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            Building Web development projects embadded with AI
                            Algorthims and Nural Networks Models
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Project Managment
                          </h5>
                          <p>
                            Best Time Cost and efficency are the most important
                            dealing behviour with these type of projects.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
        </main>
      </>
    );
  }
}

export default Landing;
