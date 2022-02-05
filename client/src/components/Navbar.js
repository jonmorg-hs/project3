import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab, Button } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import syncData from "../utils/syncdata";
import workSheet from "../utils/worksheet";
import uploadData from "../utils/uploaddata";
import installApp from "../utils/installpwa";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={() => syncData()}>
                    <div className="option">Sync Data to HaulSmart</div>
                  </Nav.Link>
                  <Nav.Link onClick={() => uploadData()}>
                    <div className="option">Sync Data to Cloud</div>
                  </Nav.Link>
                  <Nav.Link onClick={() => alert("test")}>
                    <div className="option">Active Patterns</div>
                  </Nav.Link>
                  <Nav.Link onClick={() => workSheet()}>
                    <div className="option">Worksheet</div>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>
                    <div className="option">Logout</div>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link id="buttonInstall" onClick={() => installApp()}>
                    <div className="option">Install</div>
                  </Nav.Link>
                  <Nav.Link id="loginlink" onClick={() => setShowModal(true)}>
                    <div className="option">Login/SignUp</div>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
