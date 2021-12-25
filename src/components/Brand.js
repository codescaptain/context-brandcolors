import React, {useContext} from 'react'
import {getContrastYIQ} from '../helper'
import MainContext from '../context/MainContext'
import Clipboard from 'react-clipboard.js';

const Brand = ({brand}) => {

  const {addBrands, selectedBrands, removeBrands, setCopied} = useContext(MainContext)

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)){
      removeBrands(brand.slug)
    }else{
      addBrands(brand.slug)
    }
  }
  const setColor = (color) => {
    setCopied(color)
  }
  return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, key) => (
            <Clipboard 
            data-clipboard-text={`#${color}`} 
            onSuccess={() => setColor(color)} 
            component="span" key={key} 
            style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
             {color}
            </Clipboard>
        ))}
      </div>
    </div>
  )
}

export default Brand
