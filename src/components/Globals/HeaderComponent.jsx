import React from "react";

const HeaderComponent = ({title}) => {
  return (
    <div className="col-md-4 d-flex flex-column align-items-center align-self-center">
      <span className="text-secondary fs-3 fw-bold py-3 header-text text-uppercase">{title}</span>
      <div className="line"></div>
    </div>
  );
};

export default HeaderComponent;
