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

    // Toggle according to there category
    const toggleCategory = (e) => {
      if(category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
        else {
          setCategory(prev => [...prev, e.target.value])
        }
    }

    // Toggle according to free or paid
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
    }, [category, type, products]);

    // Sort product on the basis of there price
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
    <div className='flex flex-col md:flex-row gap-1 sm:gap-5 lg:gap-10 pt-10 text-[#fff] mt-12 md:mt-16 px-8 md:px-8 ml-0 sm:ml-28 md:ml-36 lg:ml-52 mr-0 sm:mr-10 min-h-[80vh]'>

      {/* Filter option */}
      <div className='min-w-36 lg:min-w-40'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 font-bold'>FILTER</p>

        {/* Category Filter */}
        <div className={`border border-gray-400 pl-3 lg:pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} md:block`}>
          <p className='mb-3 text-start font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-3 lg:gap-2 text-xs lg:text-sm font-light text-gray-300'>
            {/* <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"All"} onChange={toggleCategory} /> All
            </p> */}

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Animation"} onChange={toggleCategory} /> Animation
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
        <div className={`border border-gray-400 pl-3 lg:pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} md:block`}>
          <p className='mb-3 text-start font-medium'>TYPE</p>

          <div className='flex flex-col gap-3 lg:gap-2 text-xs lg:text-sm font-light text-gray-300'>
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
      <div className='flex flex-col items-start justify-start lg:justify-between'>

        <div className='all-collection min-w-[50vw] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between text-2xl sm:text-4xl mb-4 px-0 sm:px-4'>
          <Title text1={"All"} text2={"COLLECTIONS"} />
          
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 h-8 lg:h-10 w-36 lg:w-max border-gray-500 text-gray-200 text-xs lg:text-sm px-1 lg:px-2 bg-[#0d1224]'>
            <option className="" value="relavent">Sort by: Relavent</option>
            <option className="" value="low-high">Sort by: Low to High</option>
            <option className="" value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* All Products */}
        <div className='flex flex-wrap justify-around gap-10 gap-y-10 my-12 px-4 md:px-10'>

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
