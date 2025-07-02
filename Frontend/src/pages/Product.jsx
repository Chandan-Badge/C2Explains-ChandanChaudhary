import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import NewsletterBox from "../components/NewsletterBox.jsx";
import ReletedProducts from '../components/ReletedProducts.jsx';

function Product() {

  const { productId } = useParams();
  // console.log(productId);
  
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        // console.log(item);

        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const shareFunction = () => {
    navigator.share({
          title: "This is an amazing Website 😍",
          url: `/product/${productId}`,
      }).then(() => console.log("Thanks for Sharing"))
      .catch((err) => console.log(err));
  }

  return productData ? (
    <div className='mt-28 w-full flex justify-center sm:justify-end pl-0 sm:pl-20 lg:pl-16 pr-0 sm:pr-8 lg:pr-16 text-[#fff] min-h-[80vh]'>
      <div className='w-[85%] flex flex-col justify-center items-center'>

        <div className='w-full flex justify-between'>
          <Link to={"/collection"} className='w-max mb-3 flex items-center gap-1 text-sm hover:bg-[#181e33] transition-all px-4 py-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
            Go back
          </Link>

          <button onClick={shareFunction} className='w-max mb-3 flex items-center gap-1 text-sm hover:bg-[#181e33] transition-all px-4 py-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/></svg>
            Share
          </button>
        </div>

        <div className='flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start bg-[#181e33]/50 border border-[#b6bee5]/50 rounded-lg gap-8 sm:gap-10 h-max px-5 sm:px-10 py-10 md:py-16 '>

          {/* Product Image */}
          <div className=' w-[50%] md:w-[45%] bg-[#0d1224] rounded-xl flex justify-center items-center'>
            <img src={image} alt="" />
          </div>

          {/* Product Info */}
          <div className='h-[80%] w-[100%] md:w-[50%] flex flex-col gap-3 pr-0 md:pr-5'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'>{productData.name}</h1>
            <p className='text-xs md:text-sm lg:text-base font-normal text-[#b6bee5]'>{productData.description}</p>
            <h2 className='text-xl md:text-2xl font-medium flex'>Price: ₹{productData.price} {(productData.price == 0) && <span className='text-[#b6bee5] text-xl ml-1'>(Free)</span>}</h2>

            <div className='flex flex-col xl:flex-row gap-5 mt-4'>
              <button className='bg-[#000] active:bg-gray-800 text-[#fff] text-lg md:text-xl rounded-full px-4 md:px-6 py-2 md:py-3 w-max font-medium font-sans flex gap-2 hover:-translate-y-1 transition-all duration-200 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#fff] w-4 md:w-5' viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                Buy Now
              </button>

              <button onClick={() => addToCart(productData._id)} className='bg-[#fff] active:bg-gray-400 text-[#0d1224] text-lg md:text-xl rounded-full px-4 md:px-6 py-2 md:py-3 w-max font-medium font-sans flex gap-2 hover:-translate-y-1 transition-all duration-200 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0d1224] w-5 md:w-6' viewBox="0 -960 960 960"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                Add to Cart
              </button>
            </div>
          </div>

        </div>

        {/* Related Product */}
        <ReletedProducts category={productData.category} subCategory={productData.subCategory} />
        
        <NewsletterBox />

      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;