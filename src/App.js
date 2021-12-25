import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar'
import MainContext from './context/MainContext'
import BrandsData from './brands.json'
import { useState, useEffect } from 'react';
import Copied from './components/Copied';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Collection from './components/Collection';
import {forceCheck} from 'react-lazyload';
const App = () => {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [filterText, setFilterText] = useState('');

  const removeBrands = (getSlug) => {
    setSelectedBrands(selectedBrands.filter((slug, i) => slug !== getSlug))
  }

  const removeAllBrands = () => {
    setSelectedBrands([])
  }

  const addBrands = (getSlug) => {
    setSelectedBrands([...selectedBrands, getSlug ])
  }


  const searchBrands = brands.filter((brand) => {
    return brand.title.toLowerCase().includes(filterText.toLocaleLowerCase())
});

  useEffect(() => {
    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 1000);
    }
  }, [copied])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    removeBrands,
    addBrands,
    setCopied,
    copied,
    searchBrands,
    setFilterText,
    removeAllBrands
  }
  return (
    <>
    
      <MainContext.Provider value={data}>
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/collection/:slugs" element={<Collection />}/>
          </Routes>
        </Router>
        {copied && <Copied/>}
      </MainContext.Provider>
    </>  
  );
}

export default App;
