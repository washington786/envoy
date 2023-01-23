import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/about");
  };

  let title = "We are a Law Firm Consultancy Company.";
  let description = "we service in strategy,management & impact.";
  return (
    <div className="container-fluid bg-info min-vh-100 home-con d-flex align-items-center justify-content-center">
      <div className="card home-card d-flex align-items-center justify-content-center">
        <h3 className="fs-2 fw-bold text-white text-center pt-3">{title}</h3>
        <span className="fs-6 fw-light text-white">{description}</span>
        <button
          onClick={handleClick}
          className="btn btn-lg btn-dark mt-4"
          type="button"
        >
          read more...
        </button>
      </div>
    </div>
  );
}

export default Home;
