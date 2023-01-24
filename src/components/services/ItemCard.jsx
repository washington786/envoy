import React from 'react'
import './ItemCard.css';

const ItemCard = ({serviceClass,children,bg}) => {
  return (
    <div className={`card border-none services-card col my-5 mx-4 rounded-5 ${serviceClass}`} style={{backgroundColor:`${bg}`}}>
        {children}
    </div>
  )
}

export default ItemCard