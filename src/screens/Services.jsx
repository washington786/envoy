import React, { Fragment } from "react";
import HeaderComponent from "../components/Globals/HeaderComponent";
import ItemCard from "../components/services/ItemCard";
import "../styles/services.css";

const cardsData = [
  {
    title: "strategy",
    lists: [
      "Intersectional and Mainstreaming Strategy",
      "ESG and CSI Strategy",
      "Marketing and Content",
      "Implementation Strategy",
    ],
    color: "rgba(4, 191, 191, 0.96)",
  },
  {
    title: "MANAGEMENT",
    lists: [
      "Project Development",
      "Project Management",
      "Resource Mobilization",
      "Event Management",
    ],
    color: "#58D378",
  },
  {
    title: "IMPACT",
    lists: [
      "Research and Data Collection",
      " Social Return on: \nInvestment,\n Facilitation and Moderation",
      "Evaluations and Reporting",
      "Sustainability Assessment",
    ],
    subLists: ["Investment", "Facilitation and Moderation"],
    color: "#F2B02F",
  },
];

const Services = () => {
  return (
    <div className="container-fluid bg-white min-vh-100 d-flex flex-column">
      <HeaderComponent title={'services'}/>

      <div className="d-flex align-items-center mt-5 justify-content-evenly container">
        {cardsData.map((card, index) => {
          const { title, lists,color } = card;
          return (
            <>
              <ItemCard
                serviceClass={`align-self-center card1 d-flex`} key={index}
                bg={color}
              >
                <CardContent title={title} list={lists}/>
              </ItemCard>
            </>
          );
        })}
      </div>
    </div>
  );
};

function CardContent({ title, list }) {
  return (
    <Fragment>
      <span className="text-white text-center fs-3 fw-bold text-uppercase py-2">
        {title}
      </span>
      <ul className="list-group list-group-flush list-group-numbered bg-transparent mt-3">
        <ListWrapper list={list}/>
      </ul>
    </Fragment>
  );
}

function ListWrapper({ list}) {
  return (
    <>
      {list.map((li,index) => {
        return (
          <ol className="fw-lighter list-group-item bg-transparent text-light fs-5 border-0 py-3" key={index}>
            {li}
          </ol>
        );
      })}
    </>
  );
}

// function SubListWrapper({sub}){
//   return (
//     <>
//     {
//       sub.map((sb,index)=>{
//         return(
//           <li className="list-group-item list-group-numbered fw-light list-group-flush" key={index}>{sb}</li>
//         )
//       })
//     }
      
//     </>
//   )
// }

export default Services;
