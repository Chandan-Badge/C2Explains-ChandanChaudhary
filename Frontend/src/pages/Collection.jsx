import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title';
import { ShopContext } from '../context/shopContext';
import ProductItem from '../components/ProductItem';

function Collection() {

    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);

    const [filterProducts, setFilterProducts] = useState([]);

    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);

    const [sortType, setSortType] = useState("relavent");

    const toggleCategory = (e) => {
      if(category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
        else {
          setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleType = (e) => {
      if(type.includes(e.target.value)) {
        setType(prev => prev.filter(item => item !== e.target.value))
      }
        else {
          setType(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
      let productsCopy = products.slice();

      if(category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
      }

      if(type.length > 0) {
        productsCopy = productsCopy.filter(item => type.includes(item.type));
      }

       setFilterProducts(productsCopy);
    }

    useEffect(() => {
      setFilterProducts(products);
    }, []);

    // useEffect(() => {
    //   console.log(category);
    // }, [category]);

    // useEffect(() => {
    //   console.log(type);
    // }, [type]);

    useEffect(() => {
      applyFilter();
    }, [category, type]);

    const sortProduct = () => {

      let fpCopy = filterProducts.slice();
  
      switch(sortType) {
        case "low-high" :
          setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
          break;
  
        case "high-low" :
          setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
          break;
  
        default: 
          applyFilter();
          break;
      }
    }

    useEffect(() => {
      sortProduct();
    }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-16 text-[#fff] pl-64'>

      {/* Filter option */}
      <div className='min-w-40'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 font-bold'>FILTER</p>
        {/* Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-start font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"All"} onChange={toggleCategory} /> All
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Button"} onChange={toggleCategory} /> Button
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Card"} onChange={toggleCategory} /> Card
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Loaders"} onChange={toggleCategory} /> Loaders
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Radio_Buttons"} onChange={toggleCategory} /> Radio Buttons
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Checkbox"} onChange={toggleCategory} /> Checkbox
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Input"} onChange={toggleCategory} /> Input
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Switch"} onChange={toggleCategory} /> Switch
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Form"} onChange={toggleCategory} /> Form
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Tooltip"} onChange={toggleCategory} /> Tooltip
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Background"} onChange={toggleCategory} /> Background
            </p>

          </div>

        </div>

        {/* Sub-Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-start font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Paid"} onChange={toggleType} /> Paid
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Free"} onChange={toggleType} /> Free
            </p>

          </div>
        </div>

      </div>
      
      {/* Products */}
      <div className='flex-1 pr-8'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select onChange={(e) => e.target.value} className='border-2 border-gray-500 text-gray-200 text-sm px-2 bg-[#0d1224]'>
            <option className="" value="relavent">Sort by: Relavent</option>
            <option className="" value="low-high">Sort by: Low to High</option>
            <option className="" value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* All Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 my-12'>

          {
            filterProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default Collection;
