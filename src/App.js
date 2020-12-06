import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, BrowserRouter, Link, Route, Redirect} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import React from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import KE from './img/kingedward.png';
import { useMediaQuery } from 'react-responsive'


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <header className="App-header">
          <div className="left-header">
            <h2>3rd Universal Healthcare Symposium</h2>
            <h5>Sunday, December 20th, 2020
              Virtual Meeting
            </h5>
            <p style={{fontSize: '15px'}}>King Edward Medical College Alumni Association of the United Kingdom
              King Edward Medical University Lahore
            </p>
          </div>
          <div className="right-header">
            <img src={KE} style={{height: '100%',position:'absolute', right: '0px'}}/>
          </div>
        </header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>UHS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto uhs-nav">
              <Nav.Link href="/home" >
                Home
              </Nav.Link>
              <Nav.Link href="/welcome">
                Welcome
              </Nav.Link>
              <Nav.Link href="#link">Programme</Nav.Link>
              <Nav.Link href="#link">Directory</Nav.Link>
              <Nav.Link href="#link">Committee</Nav.Link>
              <Nav.Link href="#link">Links</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" render={(props) => (
            <Home {...props} isMobile={isTabletOrMobile} />
        )}/>
        <Route path="/welcome" component={Welcome}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
