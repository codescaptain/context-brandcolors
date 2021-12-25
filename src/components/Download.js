import React, { useContext, useState, useEffect } from 'react'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'
import MainContext from '../context/MainContext'


const Download = () => {
  const {selectedBrands, removeAllBrands, brands} = useContext(MainContext)
  const [downloadUrl, setDownloadUrl] = useState()
  const [cssMethod, setCssMethod] = useState('css')
  const getLink = () => {
    prompt('Here is the url share!', `http://localhost:3000/collection/${selectedBrands.join(',')}`)
  }
  useEffect(() => {
    if(selectedBrands.length > 0) {
      let output = '';

      switch(cssMethod){
        case 'css':
          output = ':root {\n';
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug ===slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`
            })
          })
          output += '}';
          break;
        
          case 'scss':
            selectedBrands.map(slug => {
              let brand = brands.find(brand => brand.slug ===slug);
              brand.colors.map((color, key) => {
                output += `\$${slug}-${key}: #${color};\n`
              })
            })
            break;
         
          case 'less':
            selectedBrands.map(slug => {
              let brand = brands.find(brand => brand.slug ===slug);
              brand.colors.map((color, key) => {
                output += `\@${slug}-${key}: #${color};\n`
              })
            })
            break;

      }

      


      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
      return () => {
        URL.revokeObjectURL(url)
        setDownloadUrl('')
      }
    }
  }, [selectedBrands, cssMethod])

  return (
    <div className="download">
      <div className="actions">
        <a download={`test.${cssMethod}`} href={downloadUrl}>
          <GrDownload />
        </a>
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a onClick={getLink}>
          <GrLink />
        </a>
      </div>
      <div onClick={removeAllBrands} className="selected">
        <button ><GrClose /></button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  )
}

export default Download
