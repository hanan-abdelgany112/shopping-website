import React, { components } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css';

 function Footer(){

      return (
          <div className ="body">
              <div className="container1 ">
              <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <div className="content">
                              <h2 className="text-success">Zay Shop</h2>
                              <hr className="text-light"/>
                              <div className="text-light">
                                   <FontAwesomeIcon icon={faMapMarkerAlt} className="fontawsome" /> 123 Consectetur at ligula 10660 <br/>
                                   <FontAwesomeIcon icon={faPhone} className="fontawsome" /> 010-020-0340<br/>
                                  <FontAwesomeIcon icon={faEnvelope} className="fontawsome" /> info@company.com<br/>
                              </div>
                              </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="content">
                              <h2 className="text-light">Products</h2>
                              <hr className="text-light"/>
                              <ul className="text-light">
                                  <li><a href="...">Luxury</a></li>
                                  <li><a href="...">Sport Wear</a>
                                  </li>
                                  <li><a href="...">Men's Shoes</a>
                                  </li>
                                  <li><a href="...">Women's Shoes</a>
                                  </li>
                                  <li><a href="...">Popular Dress</a>
                                  </li>
                                  <li><a href="...">GYM Accessories</a>
                                  </li>
                                  <li><a href="...">Sport Shoes</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="content">
                              <h2 className="text-light">Furthwe Info</h2>
                              <hr className="text-light" />
                              <ul className="text-light">
                                  <li><a href="...">Home</a>
                                  </li>
                                  <li><a href="...">About Us</a>
                                  </li>
                                  <li><a href="...">Shop Location</a>
                                  </li>
                                  <li><a href="...">FAQs</a>
                                  </li>
                                  <li><a href="...">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="container2">
                  <hr className="text-light" />

<div className="row">
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="content-links">
          <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="fontawsome" />
          </a>
          <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} className="fontawsome" />
          </a>
          <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="fontawsome" />
          </a>
          <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="fontawsome" />
          </a>
      </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="content-form">
          <form action="#" method="">
              <input type="email" name="email" id="email" placeholder="Email Address" />
              <input type="submit" value="Subscripe" className="btn btn-success" />
          </form>
      </div>
  </div>

               </div>
              </div>
              <div className="last">
                  <p>Perpared By  All Teams</p>
              </div>
          </div>
      )
  }

export default Footer;
