import React, { Fragment } from "react";
import HeaderComponent from "../components/Globals/HeaderComponent";
import { ContentWrapper, MainContainer } from "./Clients";

import "../styles/teams.css";

import Team_1 from "../assets/team1.png";
import Team_2 from "../assets/team2.png";
import Team_3 from "../assets/team3.png";
import Team_4 from "../assets/team4.png";
import { useState } from "react";

const teams = [
  {
    id: 0,
    uri: `${Team_1}`,
    fullNames: "MAHLATSE RAMOROKA",
  },
  {
    id: 1,
    uri: `${Team_2}`,
    fullNames: "YOLOKAZI MFUTO",
  },
  {
    id: 2,
    uri: `${Team_3}`,
    fullNames: "SIBUSISIWE NKOSI",
  },
  {
    id: 3,
    uri: `${Team_4}`,
    fullNames: "KARABO MOKGONYANA",
  },
];

const Team = () => {
  const [visible, setVisible] = useState(true);

  const onClickMember = (id) => {
    const f = teams.find((team) => team.id === id);
    if (f) {
      setVisible(!visible);
    }
  };

  const click=()=>{
    setVisible(!visible);
  }

  if (!visible) {
    return (
      <Overlay uri={Team_1} name={"Daniel"} description={"kskskskskksksksks"} click={click}/>
    );
  }

  return (
    <MainContainer>
      <HeaderComponent title={"our team"} />
      <ContentWrapper>
        <div className="col-md-6 w-100  d-flex align-items-center justify-content-evenly py-4 mt-3">
          {teams.map((team, index) => {
            const { uri, fullNames, id } = team;
            return (
              <>
                <CardWrapper
                  name={fullNames}
                  uri={uri}
                  key={index}
                  id={id}
                  visible={visible}
                  OnClick={onClickMember.bind(this, id)}
                />
                {/* {!visible && <Overlay />} */}
              </>
            );
          })}
        </div>
      </ContentWrapper>
    </MainContainer>
  );
};

function CardWrapper({ uri, name, OnClick, id, visible }) {
  return (
    <Fragment>
      <div
        className="card border-1"
        style={{
          width: "16rem",
          minHeight: 350,
          maxHeight: 350,
          height: "100%",
          display: !visible && "none",
        }}
        onClick={OnClick}
      >
        <img src={uri} alt={uri} className="card-image-top" />
        <div className="card-body align-self-center">
          <h4 className="text-dark fw-bold fs-6 card-title text-uppercase text-center">
            {name}
          </h4>
          <span className="text-muted card-text fw-light text-capitalize text-center co-f">
            CO-FOUNDER AND PARTNER
          </span>
        </div>
      </div>
    </Fragment>
  );
}

function Overlay({ uri, name, description,click }) {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container w-75 bg-light t-overlay-con rounded-2 py-4 d-flex flex-column">
        <i class="bi bi-x-lg text-end t-close" onClick={click}></i>
        <div className="row">
          <div className="col-5">
            <img src={uri} alt={uri} className="card-image-top" />
            <div className="card-body align-self-center">
              <h4 className="text-dark fw-bold fs-6 card-title text-uppercase text-center">
                {name}
              </h4>
              <span className="text-muted card-text fw-light text-capitalize text-center co-f">
                CO-FOUNDER AND PARTNER
              </span>
            </div>
          </div>
          <div className="col-7">
            <p className="fs-6 fw-lighter c-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              officiis, maiores totam minima eligendi ratione ullam numquam qui
              quia magni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
