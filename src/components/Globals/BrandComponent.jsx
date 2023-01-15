import React from 'react'
import { Image } from 'react-bootstrap';

import Logo from '../../assets/image1.png'

const BrandComponent = () => {
  return (
    <div>
        <Image src={Logo} width={90} height={90} className='img-fluid'/>
    </div>
  )
}

export default BrandComponent