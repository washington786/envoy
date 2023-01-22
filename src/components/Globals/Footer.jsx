import React from "react";
import Logo from '../../assets/image1.png';

const FooterComponent = () => {
  return (
    <div className="container-fluid bg-light d-flex">
      <Wrapper>
        <img src={`${Logo}`} className='img-fluid' style={{width:30,height:30,objectFit:'contain'}} alt={Logo}/>
        <span className="text-secondary text-center fs-6 fw-lighter px-2">
          &copy;RE4MENVOY 2023. all rights reserved.
        </span>
      </Wrapper>
    </div>
  );
};

function Wrapper({ children }) {
  return <div className="container bg-light py-4 d-flex align-items-center justify-justify-content-start">{children}</div>;
}

export default FooterComponent;
