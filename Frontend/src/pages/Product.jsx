import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import NewsletterBox from "../components/NewsletterBox.jsx";

function Product() {

  const { productId } = useParams();
  // console.log(productId);
  
  const { products } = useContext(ShopContext);
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
  }, [productId, products])

  return productData ? (
    <div className='mt-28 w-full flex justify-end px-24 text-[#fff]'>
      <div className='w-[85%] flex flex-col justify-center items-center'>

        <Link to={"/collection"} className='w-max mb-3 flex items-center self-start gap-1 text-sm hover:bg-[#181e33] transition-all px-4 py-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
          Go back
        </Link>

        <div className='flex justify-start items-start bg-[#181e33]/50 border border-[#b6bee5]/50 rounded-lg gap-10 h-[90vh] px-10 py-16'>

          {/* Product Image */}
          <div className='h-[90%] w-[45%] bg-[#0d1224] rounded-xl flex justify-center items-center'>
            <img src={image} alt="" />
          </div>

          {/* Product Info */}
          <div className='h-[80%] w-[50%] flex flex-col gap-3 pr-5'>
            <h1 className='text-5xl font-bold'>{productData.name}</h1>
            <p className='text-base font-normal text-[#b6bee5]'>{productData.description}</p>
            <h2 className='text-2xl font-medium flex'>Price: ₹{productData.price} {(productData.price == 0) && <span className='text-[#b6bee5] text-xl ml-1'>(Free)</span>}</h2>

            <div className='flex gap-5 mt-4'>
              <button className='bg-[#000] active:bg-gray-800 text-[#fff] text-xl rounded-full px-6 py-3 w-max font-medium font-sans flex gap-2 hover:-translate-y-1 transition-all duration-200 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#fff] w-5' viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                Buy Now
              </button>

              <button className='bg-[#fff] active:bg-gray-300 text-[#0d1224] text-xl rounded-full px-6 py-3 w-max font-medium font-sans flex gap-2 hover:-translate-y-1 transition-all duration-200 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0d1224] w-6' viewBox="0 -960 960 960"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                Add to Cart
              </button>
            </div>
          </div>

        </div>

        {/* Related Product */}
        <div className='flex bg-[#181e33]/50 border border-[#b6bee5]/50 rounded-lg mt-12 w-[100%] px-12 py-4 justify-center'>
          <h1 className='text-3xl font-bold'>Related Products</h1>
        </div>
        
        <NewsletterBox />

      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;