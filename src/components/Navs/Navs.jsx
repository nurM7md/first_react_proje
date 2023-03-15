import React, { useState } from "react";
import './Navs.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './../../assets/images/res-logo.png';
import {RiShoppingBasketFill} from 'react-icons/ri';
import {RxPerson} from 'react-icons/rx';

const Navs = () => {
  const [fixed , setFixed] = useState(false);
  function setFix(){
    if(window.scrollY>=500){
      setFixed(true)
    }else{
      setFixed(false)
    }
  }
  window.addEventListener("scroll" , setFix);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" />
          <h1>Tasty Treat </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Foods</Nav.Link>
            <Nav.Link href="#home">Cart</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>

          </Nav>
          <div className="icons">
            <RiShoppingBasketFill/>
          <RxPerson/>
          </div>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
  
}

export default Navs;