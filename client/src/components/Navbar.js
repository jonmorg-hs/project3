import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import syncData from "../utils/syncdata";
import workSheet from "../utils/worksheet";
import installPWA from "../utils/installpwa";
import uploadCSV from "../utils/uploadcsv";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    const butInstall = document.getElementById("buttonInstall");

    window.addEventListener("beforeinstallprompt", (event) => {
      console.log("👍", "beforeinstallprompt", event);
      // Store the event so it can be used later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install anchor tag.
      if (butInstall !== null) {
        butInstall.style.display = "table-cell";
      }
    });

    window.addEventListener("appinstalled", (event) => {
      console.log("👍", "appinstalled", event);
      // Clear the prompt
      window.deferredPrompt = null;
      butInstall.style.display = "none";
    });

    //const uploadcsv = document.getElementById("uploadcsv");
    //if (isMobile) {
    //  uploadcsv.style.display = "none";
    //} else {
    //  uploadcsv.style.display = "block";
    // }
  }, []);

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
                    <div className="option">Sync Data</div>
                  </Nav.Link>
                  <Nav.Link onClick={() => workSheet()}>
                    <div className="option">Worksheet</div>
                  </Nav.Link>
                  <Nav.Link onClick={() => uploadCSV()}>
                    <div id="uploadcsv" className="option">
                      Upload CSV
                    </div>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>
                    <div className="option">Logout</div>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => installPWA()}>
                    <div id="buttonInstall" className="installoption">
                      Install APP
                    </div>
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
