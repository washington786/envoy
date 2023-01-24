import React, { useState } from "react";
import HeaderComponent from "../components/Globals/HeaderComponent";
import { ContentWrapper, MainContainer } from "./Clients";
import "../styles/about.css";

import ImgVector2 from "../assets/vector_2.png";

const data = [
  {
    title: "Our Company Overview",
    desc: "RE4M ENVOY (PTY) LTD is a global development and impact consultancy firm that provides strategy, management consulting, and impact assessment services working across development sectors to accelerate the world's achievement of sustainable development for all. Our firm is women-led and is based in the Global South. We aim to contribute to the development of sustainable programmes, policies and research. Our niche is to specifically aid multilaterals, governments, corporates, and civil society organisations to accelerate the implementation of existing and new programmes towards achieving the sustainable development goals. Our service offerings are clustered into three categories i.e. Strategy, Management Consulting and Impact Assessments. Our strategy services include developing implementation strategies, ESG strategies, campaign and advocacy strategies, etc. Our management consulting includes project development and management, resource mobilisation, event coordination and management, facilitation and moderation, etc. Our impact assessment includes analysing social return on investment, evaluations and reporting, sustainability assessment, etc.",
  },
  {
    title: "Our Story",
    desc: "Karabo Mokgonyana, Mahlatse Ramoroka, Sibusisiwe Nkosi and Yolokazi Mfuto are four women with careers in the development sector despite the challenges. The four women have partnered to co-found Re4m Envoy (Pty) Ltd – a global development and  impact consultancy firm working across sectors of the Sustainable Development Goals. The firm  is 100% female owned originating from the Global South. The idea behind Reform came through reflections and assessments around youth, gender, racial and African inclusion were at an all time importance in the international discourse. Coincidently, all four women were entertaining the idea of doing consultancy work and when they came across each other, it felt like it was now or never. Re4m Envoy was officially started in October 2022, the four women brought their minds together to establish what they hope is going to be one of the biggest female owned development consultancy firms. Offering strategy, project management and  impact assessment services.",
  },
];

const About = () => {
  const [isOverView, setOverView] = useState(true);
  const [isStory, setStory] = useState(true);

  const showOverView = () => {
    setOverView(!isOverView);
  };

  const showStory = () => {
    setStory(!isStory);
  };

  return (
    <MainContainer>
      <HeaderComponent title={"about us"} />
      <ContentWrapper>
        <div className="position-relative container px-3 py-2">
          <ContentsWrapper
            description={
              isOverView ? data[0].desc.substring(0, 400) : data[0].desc
            }
            title={data[0].title}
            onClick={showOverView}
            isOverview={isOverView}
          />
          <ContentsWrapper
            description={
              isStory ? data[1].desc.substring(0, 400) : data[1].desc
            }
            title={data[1].title}
            onClick={showStory}
            isOverview={isStory}
          />
        </div>
        <div className="v-1 position-absolute end-0 bottom-0">
          <img
            src={ImgVector2}
            alt={ImgVector2}
            className="img-thumbnail bg-transparent border-0 img-vector"
          />
        </div>
      </ContentWrapper>
      <div className="svg-con m-0 p-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7DD957"
          fill-opacity="1"
          className="position-fixed"
          d="M0,256L30,240C60,224,120,192,180,154.7C240,117,300,75,360,90.7C420,107,480,181,540,224C600,267,660,277,720,272C780,267,840,245,900,218.7C960,192,1020,160,1080,133.3C1140,107,1200,85,1260,74.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <svg className="svg-two-sm p-0 m-0 d-xl-none d-md-none d-lg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7dd957" fill-opacity="1" d="M0,256L34.3,245.3C68.6,235,137,213,206,218.7C274.3,224,343,256,411,224C480,192,549,96,617,90.7C685.7,85,754,171,823,192C891.4,213,960,171,1029,133.3C1097.1,96,1166,64,1234,48C1302.9,32,1371,32,1406,32L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      </div>
    </MainContainer>
  );
};

function ContentsWrapper({ title, description, isOverview, onClick }) {
  return (
    <div className="col-lg-6 col-xxl-8 bg-light py-2 px-1 align-align-items-start justify-content-start align-align-self-start d-flex flex-column rounded-1 my-3">
      <span className="text-secondary fw-bold fs-5 text-capitalize text-center">
        {title}
      </span>
      <p className="fs-6 a-desc text-opacity-25 fw-light">
        {description}
        {isOverview && "..."}
        <span className="text-info a-show-more" onClick={onClick}>
          {isOverview ? "show more" : "show less"}
        </span>
      </p>
    </div>
  );
}

export default About;
