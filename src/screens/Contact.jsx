import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/Globals/HeaderComponent";
import "../styles/contact.css";

let fb = "bi-facebook";
let fbIn = "https://www.facebook.com/profile.php?id=100088288746048";

let tw = "bi-twitter";
let twIn = "https://twitter.com/Re4mEnvoy";

let email = "bi-envelope";

let loc = "bi-geo-alt";

let ins = "bi-instagram";
let insIn = "https://www.instagram.com/re4menvoy/";

let lnk = "bi-linkedin";
let lnkIn = "https://www.linkedin.com/company/re4m-envoy/";

const Contact = () => {
//   const navigation = useNavigate();

//   const location = useLocation();

//   let path = location.pathname;

//   if (path === "/undefined") {
//     return User;
//   }

  return (
    <>
      <Wrapper>
        <HeaderComponent title={"connect with us"} />
        <InnerWrapper>
          <div class="row d-flex align-items-center justify-justify-content-center">
            <div className="col-md-4 col-lg-6 align-self-center d-flex flex-column align-items-center justify-content-center">
              <SocialCard links={fbIn}>
                <IconWrapper icon={fb} />
                <Title title={"RE4M ENVOY"} />
              </SocialCard>
              <SocialCard links={insIn}>
                <IconWrapper icon={ins} />
                <Title title={"re4menvoy"} />
              </SocialCard>
            </div>
            <div className="col-md-4 col-lg-6 align-self-center d-flex flex-column align-items-center justify-content-center">
              <SocialCard links={lnkIn}>
                <IconWrapper icon={lnk} />
                <Title title={"RE4M ENVOY"} />
              </SocialCard>
              <SocialCard links={twIn}>
                <IconWrapper icon={tw} />
                <Title title={"@Re4mEnvoy"} />
              </SocialCard>
            </div>
            <div className="col-md-4 col-lg-6 align-self-center d-flex flex-column align-items-center justify-content-center">
              <SocialCard>
                <IconWrapper icon={email} />
                <Title title={"re4menvoy.co.za"} />
              </SocialCard>
            </div>
            <div className="col-md-4 col-lg-6 align-self-center d-flex flex-column align-items-center justify-content-center">
              <SocialCard>
                <IconWrapper icon={loc} />
                <Title title={"Johannesburg, South Africa"} />
              </SocialCard>
            </div>
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

function Wrapper({ children }) {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {children}
    </div>
  );
}

function InnerWrapper({ children }) {
  return (
    <div className="w-50 align-self-center bg-light py-5 px-4 text-center my-2">
      {children}
    </div>
  );
}

function SocialCard({ children, links }) {
  return (
    <a
      href={`${links}`}
      className="text-decoration-none c-card align-self-center d-flex align-items-center justify-content-center"
    >
      <div className="card c-card py-3 my-3 w-75 align-self-center border-0 shadow-sm">
        {children}
      </div>
    </a>
  );
}

function IconWrapper({ icon }) {
  return <i class={`bi ${icon} c-icons`}></i>;
}

function Title({ title }) {
  return (
    <>
      <span className="text-secondary text-center-fs-4 fw-light d-block">
        {title}
      </span>
    </>
  );
}

export default Contact;
