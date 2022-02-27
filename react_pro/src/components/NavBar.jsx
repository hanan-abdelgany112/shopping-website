import React, { Component} from 'react';
import logo from '../image/logo.png';
import { Navbar, Nav, NavDropdown, Container    } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import '../style/NavBar.css';
import { NavLink } from "react-router-dom";



function NavBar() {
 
        return (
            <div className="space">
         
            <Navbar bg="light" expand="lg" className="fixed-top">
  <div className="nav">
    
    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand> 
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll>
        {/* <Nav.Link className="text-dark fs-6" href="#home">Home</Nav.Link>
        <Nav.Link className="text-dark fs-6" href="#link">Link</Nav.Link>
        <Nav.Link className="text-dark fs-6" href="#pricing">Log in</Nav.Link>
        <Nav.Link className="text-dark fs-6" href="#disable">Sign up</Nav.Link> */}
<div className="center">
    <div className="sign">
     <NavLink  to="/LogIn">SIGNIN</NavLink>
     <NavLink  to="/Sign_up">SIGNUP</NavLink>
    
     </div>

          <pre>           </pre>
        <div className="main ">
       <input className="in" type="text"  placeholder="Search any thing you want...!" aria-label="search" aria-describedby="inputGroup-sizing-sm" className="border "/>
         <FontAwesomeIcon icon={faSearch} className="header_searchInput fs-3 "/>
       </div>

        
        
       <ul className="main-nav">
       <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              

       <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              
             
                
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
     
        <li class="option">
         
        </li>
      </ul>


      <pre>                 </pre>
       
      <div className="drop">
      <NavDropdown className="text-dark fs-4" title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="laptop">Laptops</NavDropdown.Item>
          <NavDropdown.Item href="mobile">Mobiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */} 
          <NavDropdown.Item href="#action/3.4">Clothes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Watches</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Jewelry</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Perfumes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Glasses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Housewares</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Supermarket</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Health And Nutrition</NavDropdown.Item>

        </NavDropdown> 
        </div>

  
  
       <span className="fs-4 text-dark"> <FontAwesomeIcon icon={faShoppingCart} className="header_searchInput fs-1 " icon={faShoppingCart}/> 
       
       </span>
        
       <ul className="main-nav">
       <li className="nav-item">
                <NavLink className="nav-link" to="/card">
                  0
                 </NavLink>
               </li>
               </ul>
               <pre>                 </pre>
            
            
       </div>
       
        </Nav>
       
                        
      
    </Navbar.Collapse>
    
  </div>
</Navbar>

            </div>
        )
    
}
export default NavBar;
