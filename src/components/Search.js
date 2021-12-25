import React, {useContext, useState} from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../context/MainContext'
const Search = () => {
  const [brand, setBrand] = useState('');
  const {setFilterText} = useContext(MainContext)
  const handleBrand = (e) => {
    setBrand(e.target.value)
    setFilterText(e.target.value)
}
  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input type="text"
        placeholder="Search Brands..."
        onChange={handleBrand}
        value={brand}
        />
      
    </div>
  )
}

export default Search
