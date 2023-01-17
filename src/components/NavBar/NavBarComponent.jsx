import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BrandComponent from "../Globals/BrandComponent";
import NavLinks from "../Globals/NavLinks";

const NavBarComponent = () => {
  return (
    <Fragment>
      <div className="container justify-content-between align-items-center d-flex flex-row py-2 position-sticky start-0 end-0">
        <BrandComponent />
        <NavLinks />
      </div>
      <div className="container-fluid m-0 p-0">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default NavBarComponent;
