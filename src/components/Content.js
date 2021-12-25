import React, { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext';
import Download from './Download';
import Loader from './Loader';
import { List, AutoSizer } from 'react-virtualized';

const Content = () => {
 const {searchBrands, selectedBrands, brands} = useContext(MainContext);

 const rowRenderer =({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) => {
  {
    return (
      <Brand brand={searchBrands[index]} key={key} style={style} />
    );
  }
}

  return (
    <main className="content">
      <header className="header">
        <Search/>
        {selectedBrands.length > 0 && <Download/>}
      </header>
      <section className="brands">
        {/* {searchBrands.map((brand, key) => (
            <Brand  brand={brand} />
        ))} */}
      <AutoSizer>
          {({height, width}) => (
            <List
              height={height}
              rowCount={searchBrands.length}
              rowHeight={103}
              rowRenderer={rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  )
}

export default Content
