import React, { Fragment } from 'react'
import HeaderComponent from '../components/Globals/HeaderComponent'
import { ContentWrapper, MainContainer } from './Clients';

import '../styles/teams.css'

import Team_1 from '../assets/team1.png';
import Team_2 from '../assets/team2.png';
import Team_3 from '../assets/team3.png';
import Team_4 from '../assets/team4.png';

const teams=[
  {
    id:0,
    uri:`${Team_1}`,
    fullNames:'MAHLATSE RAMOROKA'
  },
  {
    id:1,
    uri:`${Team_2}`,
    fullNames:'YOLOKAZI MFUTO'
  },
  {
    id:2,
    uri:`${Team_3}`,
    fullNames:'SIBUSISIWE NKOSI'
  },
  {
    id:3,
    uri:`${Team_4}`,
    fullNames:'KARABO MOKGONYANA'
  },
]

const Team = () => {
  return (
    <MainContainer>
      <HeaderComponent title={'our team'}/>
      <ContentWrapper>
        <div className="col-md-6 w-75 d-flex align-items-center justify-content-evenly py-4 mt-3">
          {
            teams.map((team,index)=>{
              const {uri,fullNames} = team;
              return(
                <CardWrapper name={fullNames} uri={uri} key={index}/>
              )
            })
          }
        </div>
      </ContentWrapper>
    </MainContainer>
  )
}

function CardWrapper({uri,name}){
  return(
    <Fragment>
      <div className="card border-1" style={{width:'16rem',minHeight:350,maxHeight:350,height:'100%'}}>
        <img src={uri} alt={uri} className='card-image-top'/>
        <div className="card-body align-self-center">
          <h4 className="text-dark fw-bold fs-6 card-title text-uppercase text-center">{name}</h4>
          <span className="text-muted card-text fw-light text-capitalize text-center co-f">CO-FOUNDER AND PARTNER</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Team