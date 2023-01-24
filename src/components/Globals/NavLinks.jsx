import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import '../../styles/navlinks.css'

const NavLinks = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/contact");
  };

  return (
    <div className="container d-flex align-self-right align-items-right justify-content-end w-100">
      <Link to={"/"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Home</span>
      </Link>
      <Link to={"about"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">About</span>
      </Link>
      <Link to={"services"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Services</span>
      </Link>
      <Link to={"team"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Team</span>
      </Link>
      <Link to={"clients"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Clients</span>
      </Link>
      <Button
        onClick={handleClick}
        className="btn btn-dark fs-5 btn-sm ms-4 n-btn"
        type="button"
      >
        contact us
      </Button>

      {/* <Collapse/> */}
    </div>
  );
};

function Collapse(){
  return(
    <div className="n-custom container w-50 align-self-center">
      {/* <Link to={"/"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Home</span>
      </Link>
      <Link to={"about"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">About</span>
      </Link>
      <Link to={"services"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Services</span>
      </Link>
      <Link to={"team"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Team</span>
      </Link>
      <Link to={"clients"} className="mx-3 text-decoration-none n-links">
        <span className="text-secondary fs-4 fw-light">Clients</span>
      </Link> */}
    </div>
  )
}

export default NavLinks;
