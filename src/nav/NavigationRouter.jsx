import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBar/NavBarComponent";

import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";
import Team from "../screens/Team";
import Clients from "../screens/Clients";
import Contact from "../screens/Contact";

const NavigationRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBarComponent/>} path='/' >
            <Route element={<Home/>} path='/' index/>
            <Route element={<About/>} path='/about' />
            <Route element={<Services/>} path='/services' />
            <Route element={<Clients/>} path='/clients' />
            <Route element={<Team/>} path='/team' />
            <Route element={<Contact/>} path='/contact' />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default NavigationRouter;
