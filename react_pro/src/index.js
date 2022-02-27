import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  NavBar,
  Footer,
  Home,
  About,
  Sign_up,
  LogIn,
  Contact,
  Card,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/Sign_up" element={<Sign_up />} />
      <Route path="/Card" element={<Card />}>
      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} /> 
     <Route path=":postSlug" element={<Post />} />  */}
      </Route>
    </Routes>
    <Footer /> 
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
