import React from 'react'

import AppCopy from '../../utils/app-copy-text'
import './brand-button.less'

const BrandButton = (props) => {
  return (
    <div className='brandButtonContainer'>
      <div className='brandButton' onClick={() => props.onBrandClick()}>{AppCopy.headerBrandButtonText}</div>
    </div>
  )
}

export default BrandButton