import React, { useContext, useEffect } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import { Link, useParams } from 'react-router-dom'
import { GrFormPreviousLink } from 'react-icons/gr';
import Loader from './Loader';


const Collection = () => {
  const {slugs} = useParams();
  const {setSelectedBrands, selectedBrands, brands, removeAllBrands} = useContext(MainContext);
  useEffect(() => {
   setSelectedBrands(slugs.split(','))
  }, [])
  return (
    
    <main className="content">
    <header className="header">

      <Link to="/" onClick={removeAllBrands}>
        <GrFormPreviousLink /> All Brands
      </Link>
      {selectedBrands.length > 0 && <Download/>}
    </header>
    <section className="brands">
      {selectedBrands.map((slug, key) => {
        let brand = brands.find(brand => brand.slug === slug)
        return (
          <LazyLoad key={key} overflow={true} once={true} placeholder={<Loader />}>
          <Brand  brand={brand} />
        </LazyLoad>
        )
        })}
    </section>
  </main>
  )
}

export default Collection
