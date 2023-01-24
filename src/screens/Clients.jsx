import React, { Fragment } from "react";
import HeaderComponent from "../components/Globals/HeaderComponent";
import ClientCircle from "../assets/clients.png";

import Client_2 from '../assets/image10.png';
import Client_3 from '../assets/image6.png';
import Client_4 from '../assets/image7.png';
import Client_5 from '../assets/image8.png';
import Client_6 from '../assets/image9.png';

const data = [
  {
    title: "GOVERNMENTS",
    description:
      "We service national governments,embassies and consulates, governmental organisations and multilateral intergovernmental organizations",
    color: "#ff66c3",
  },
  {
    title: "COMPANIES",
    description:
      "We service companies in both the private and public sector in their ESG, CSI and any other development initiatives",
    color: "#7dd957",
  },
  {
    title: "CIVIL SOCIETY ORGANIZATIONS",
    description:
      "We service national and international civil society organizations to assist in achieving their development and organizational goals",
    color: "#00c2cb",
  },
  {
    title: "IMPACT FUNDS",
    description:
      "We service impact funds by directing their return on investment in development",
    color: "#ff904d",
  },
];

const clients=[
  {
    id:0,
    uri: `${Client_2}`
  },
  {
    id:1,
    uri: `${Client_3}`
  },
  {
    id:2,
    uri: `${Client_4}`
  },
  {
    id:3,
    uri: `${Client_5}`
  },
  {
    id:4,
    uri: `${Client_6}`
  },
]

const Clients = () => {
  return (
    <MainContainer>
      <HeaderComponent title={"clients"} />
      <ContentWrapper>
        <div className="row justify-content-between align-items-center align-self-sm-center align-self-center align-self-md-center">
          <div className="col-4 position-relative ">
            <div
              className="card align-self-end bg-transparent border-0 text-left my-5"
              style={{ width: "25rem" }}
            >
              <ContentCon
                description={data[0].description.toString()}
                title={data[0].title}
                color={data[0].color}
              />
            </div>
            <div
              className="card align-self-end bg-transparent border-0 text-left my-5"
              style={{ width: "25rem" }}
            >
              <ContentCon
                description={data[1].description.toString()}
                title={data[1].title}
                color={data[1].color}
              />
            </div>
          </div>
          <div className="col-4">
            <img
              src={`${ClientCircle}`}
              alt={`${ClientCircle}`}
              className="img-thumbnail border-0 bg-transparent"
            />
          </div>
          <div className="col-4 position-relative">
            <div
              className="card align-self-end  bg-transparent border-0 text-end ms-2"
              style={{ width: "25rem" }}
            >
              <ContentCon
                description={data[2].description.toString()}
                title={data[2].title}
                color={data[2].color}
              />
            </div>
            <div
              className="card align-self-end bg-transparent border-0 text-end ms-3"
              style={{ width: "25rem" }}
            >
              <ContentCon
                description={data[3].description.toString()}
                title={data[3].title}
                color={data[3].color}
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
        <div className="col-md-6 d-flex align-items-center justify-content-evenly w-100 container">
          {
            clients.map((client,index)=>{
              const {uri} = client;
              return(
                <PreviousClientsWrapper img={uri} key={index}/>
              )
            })
          }
        </div>
    </MainContainer>
  );
};

function MainContainer({ children }) {
  return (
    <div className="container-fluid bg-white min-vh-100 d-flex flex-column m-0 p-0">
      {children}
    </div>
  );
}

const ContentWrapper = ({ children }) => {
  return (
    <>
      <div className="d-flex container position-relative justify-content-center align-content-center py-4 mt-4 bg-transparent">
        {children}
      </div>
    </>
  );
};

function ContentCon({ title, description, color }) {
  return (
    <>
      <h3 className="fs-3 fw-bold" style={{ color: `${color}` }}>
        {title}
      </h3>
      <p className="fs-6 text-secondary fw-lighter">{description}</p>
    </>
  );
}

function PreviousClientsWrapper({img}) {
  return (
    <Fragment>
      <img src={`${img}`} alt={`${img}`} className="img-fluid img-thumbnail bg-transparent border-0" />
    </Fragment>
  );
}

export default Clients;
export {MainContainer,ContentWrapper}
