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
    profile_description:"Mahlatse Ramoroka is a researcher and international development practitioner, with experience in human rights, gender equality and political economics. Mahlatse’s career started out at United Nations Women as an intern with the Independent Evaluation Office (IEO), then later moved on to work with the Center for Economic and Social Rights (CESR). At CESR, she authored and co-authored research work about the confluence of austerity measures and human rights, advocating for the incorporation of human rights centered principles in national government budgeting. She has worked with the United Nations Women Headquarters in New York as a consultant with System Coordination Division, supporting the gender mainstreaming portfolio - through contributions to knowledge products on the importance of mainstreaming gender considerations into persistent development challenges such as climate change, the digital divide and energy infrastructure, amongst others. She has also supported the knowledge management, rollout strategy, technical development and reporting related to UN accountability frameworks on gender equality. Mahlatse's education background is in International Political Economics (IPE). She holds a master’s degree in International Political Economy and Development from Fordham University (New York), and a bachelor and honours degree in Political Science from the University of Pretoria, with a concentration in economics, political science and statistics.She is passionate about political and social justice, diplomacy, and gender equality and endeavors to contribute to this work through her consultancy work in research and policy."
  },
  {
    id: 1,
    uri: `${Team_2}`,
    fullNames: "YOLOKAZI MFUTO",
    profile_description:"Yolokazi Mfuto is a Youth holistic Development enthusiast who is passionate about the struggle against socio-economic, political and health challenges that affect young people. She holds a Bachelor of Arts majoring in Communication, History and Political Sciences, an honours degree in Political Sciences and International Relations, a certificate in Project Management and currently pursuing master’s in political sciences. She began her journey in 2014 where she led Enactus and later served as President for the organisation at the University of Fort Hare. The award-winning young leader has graduated from several leadership programs such as YALI RCL, Friedrich- Ebert Stiftung Fort Hare Autumn School, Democracy Works Academy, Futurelect- Apolitical Academy and Activate Change Drivers. She is an avid champion for Sexual Health and Reproductive Rights of women and young girls. She has served UNFPA South Africa as a Youth Advisory Panel member. She further represented the country and the continent in high level platforms advocating for SRHR including conferences hosted by United Nations agencies such as UNFPA, UNWOMEN, UNAIDS and UNESCO. Furthermore, She has published papers extensively on the issues that affect young people in South Africa. Recently, she has concluded working with the UNFPA as Adolescent and Youth intern in the South African office. Yolokazi currently serves in the Geneva Institute Digital Health Rights Project Advisory Board, Friedrich Ebert Stitfung Alumni Board and a consultant for youth development Africa."
  },
  {
    id: 2,
    uri: `${Team_3}`,
    fullNames: "SIBUSISIWE NKOSI",
    profile_description:"Sibusisiwe Nkosi is a development and peace and security professional who is currently working as the peace and reconciliation adviser and program officer at the Royal Norwegian Embassy in South Africa. In addition, Miss Nkosi is one of the Founders and Managing Directors of the South African development organization called Re4m Envoy, which focuses on contributing towards the UN Sustainable Development Goals (SDG). She also volunteers her time to the Ilenge Development Foundation, where she manages operations, and does so to help the rural KZN village of Msinga foster social cohesion.With a concentration on the African continent, Miss Nkosi has more than nine years of expertise in research, training, project management, policy analysis, and grant management. She is skilled in facilitating interactions and processes with diverse government officials, multilateral institutions, and civil society. She is fervently committed to social justice and equitable and just relationships. She is an advocate for women and young people's inclusion and active involvement in systems and settings that have traditionally and systematically excluded them. Her goals in life are to help Africa achieve peace and sustainable development. She is interested in issues of sustainable development, youth, peace and security, conflict transformation, and opening up possibilities for the peaceful settlement of disputes on the African continent.She is an alumnus of the Kader Asmal fellowship and through the programme holds a master's degree in International Security and Conflict Studies, from Dublin City University in Ireland. She also holds an honours degree in conflict transformation and peace studies from the University of KwaZulu Natal, where she also held several student leadership positions in student organizations."
  },
  {
    id: 3,
    uri: `${Team_4}`,
    fullNames: "KARABO MOKGONYANA",
    profile_description:"Karabo Mokgonyana is an award winning and internationally recognised youth and gender activist and peacebuilder from South Africa who’s committed her career to advancing social justice and socio-economic freedom through advocacy and campaigning, groundwork, research, advisory work and high-level project coordination. She was raised in a rural village in South Africa that exposed her to the realities of insecurity, poverty and inequality - which led to her interest in social and economic development of marginalised communities and peacebuilding. She has over 6 years' experience working in the development work from a grassroot level to international level. Karabo has worked with organizations such as UNESCO, Restless Development, the British Council, Mandela Institute of Development Studies, CIVICUS and Transparency International in social development work. Karabo is an outgoing member of the Youth Advisory Panellist for UNFPA South Africa, African Youth Ambassadors for Peace with the African Union, one of the 12 global Youth Power Panel with Restless Development and a Youth and Gender Innovation Expert for UNDP's Africa Borderlands Centre. She was named one of 25 Cosmopolitan Magazine’s Next Generation Voices in Africa, Top 200 Mail & Guardian Young South Africans in Civic Leadership, JCI Ten Outstanding Young Persons of South Africa 2021 and one of the 100 Most Influential Young Africans of 2021 by Avance Media. Karabo has successfully led the implementation of programs advancing women empowerment under the Global Fund and the Joint Gender Fund and has implemented CSI programmes for corporates like Cliffe Dekker Hofmeyr. She contributed to the development of the UN Security Council’s Independent Progress Study report on Youth, Peace and Security, has spoken before the UN Security Council and AU Peace and Security Council to advise on youth and gender programming. She is a Program Director at Sesi Fellowship and Skill Hub focusing on women empowerment, a former Civic Space Research Consultant at CIVICUS covering international human rights protection in four regions and is a former a Campaigns Coordinator at Change.org leading some big campaigns around water and sanitation, gender based violence and climate change. Karabo has led some of the largest campaigns in South Africa e.g. Shell Seismic Survey for East Coast, Bolt not vetting their drivers and the numerous GBV complaints and the recent Stellenbosch racial issue. Karabo was Coordinator of the Commonwealth Youth Human Rights & Democracy Network focusing on the protection of human rights within the 54 commonwealth countries and now advises various international organisations on youth and gender intersectional interventions and is a Partner at Re4m Envoy which is a global consultancy development firm that accelerates the achievement of the Sustainable Development Goals."
  },
];

const modalData={
  name:'',
  id: 0,
  uri:'',
  description:''
}

const Team = () => {

  const [userData,setUserData] = useState(modalData);

  const [visible, setVisible] = useState(true);

  const onClickMember = (id) => {
    const f = teams.find((team) => team.id === id);
    if (f) {
      setVisible(!visible);
      setUserData({
        name: f.fullNames,
        id: f.id,
        uri: f.uri,
        description: f.profile_description
      })
    }
  };

  const click=()=>{
    setVisible(!visible);
  }

  if (!visible) {
    return (
      <Overlay uri={userData.uri} name={userData.name} description={userData.description} click={click}/>
    );
  }

  return (
    <MainContainer>
      <HeaderComponent title={"our team"} />
      <ContentWrapper>
        <div className="col-md-6 col-lg-8 col-xxl-9 w-100 mx-lg-2 d-flex align-items-center justify-content-evenly py-4 mt-3 t-groups">
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
        className="card border-1 col-md-6 col-xxl-8 t-card mx-md-2"
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
      <div className="container w-75 bg-light t-overlay-con rounded-2 py-5 d-flex flex-column h-75">
        <i class="bi bi-x-lg text-end t-close my-2" onClick={click}></i>
        <div className="row">
          <div className="col-5 align-align-self-center d-flex flex-column">
            <img src={uri} alt={uri} className="card-image-top t-modal-img" />
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
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
