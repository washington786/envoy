import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BrandComponent from "../Globals/BrandComponent";
import FooterComponent from "../Globals/Footer";
import NavLinks from "../Globals/NavLinks";

const NavBarComponent = () => {
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column bg-light sticky-lg-top sticky-md-top bg-light">
        <div className="container justify-content-between align-items-center d-flex flex-row py-2">
          <NavWrapper />
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <Outlet />
      </div>
      <FooterComponent/>
    </Fragment>
  );
};

function NavWrapper() {
  return (
    <>
      <BrandComponent />
      <NavLinks />
    </>
  );
}

export default NavBarComponent;
