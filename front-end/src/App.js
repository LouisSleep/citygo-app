import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/design-system/styles/grid.css";
import "./Assets/design-system/styles/layout.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/home/Home.js";
import City from "./Views/city/City.js";
import NavBar from "./Composants/NavBar/NavBar.js";
import Login from "./Views/auth/login/Login.js";
import SignUp from "./Views/auth/signup/SignUp.js";

function App() {
  return (
    <div className="layout-with-centered-content">
      <section className="main-container">
        <div className="row-4">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}
export default App;
