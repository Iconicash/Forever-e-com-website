import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search , showsearch } = useContext(ShopContext);
  const [showFilter, SetShowFilter] = useState(false);
  const [showProduct, setShowProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setSorttype] = useState('relavent')

  useEffect(() => {
    setShowProduct(products)

  }, []);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setsubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if (showsearch && search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setShowProduct(productCopy)
  }

  const productFilter = () => {
    let fpCopy = showProduct.slice();

    switch (sortType) {
      case 'low-high':
        setShowProduct(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setShowProduct(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break
    }
  }
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showsearch])

  useEffect(() => {
    productFilter()
  }, [sortType])





  return (

    <div className='flex flex-col sm:flex-row gap-10 sm:gap-2 py-10 '>


      <div className='min-w-60 '>

        <p onClick={() => SetShowFilter(!showFilter)} className='text-2xl font-medium flex text-center text-gray-800'>FILTER
          <img className={`h-4 mt-2 mx-2 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`py-5 px-5 border mt-5  ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='text-2xl font-medium flex text-center text-gray-800'>CATEGORIES</p>
          <ul className='flex flex-col '>
            <li>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </li>
            <li>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </li>
            <li>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </li>
          </ul>
        </div>
        {/* Sub Filter */}

        <div className={`py-5 px-5 border mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-2xl font-medium flex text-center text-gray-800'>TYPE</p>
          <ul className='flex flex-col'>
            <li>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubcategory} /> Topwear
            </li>
            <li>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubcategory} /> Bottomwear
            </li>
            <li>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubcategory} /> Winterwear
            </li>
          </ul>
        </div>
      </div>

      {/* 2nd section */}

      <div className='flex-1'>
        <div className='flex justify-between  text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => setSorttype(e.target.value)} className='border-2 bg-white px-2 border-gray-300 text-sm ' name="" >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Item Section */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-2'>
          {
            showProduct.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>


    </div>




  )
}

export default Collection
