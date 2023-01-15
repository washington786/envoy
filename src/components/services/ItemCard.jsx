import React from 'react'
import './ItemCard.css';

const ItemCard = ({serviceClass,children,bg}) => {
  return (
    <div className={`card border-none services-card my-5 mx-4 ${serviceClass}`} style={{backgroundColor:`${bg}`}}>
        {children}
    </div>
  )
}

export default ItemCard