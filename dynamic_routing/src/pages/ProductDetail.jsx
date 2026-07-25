import React, { useContext } from 'react'
import { useParams } from 'react-router'
import axios from "axios";
import { useEffect } from "react";
import { MyStore } from "../context/MyContext";


const ProductDetail = () => {
    let {id} = useParams();
    
    console.log(id);

    let { singleProductData, setSingleProductData } = useContext(MyStore);


  const getSingleProductData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

     setSingleProductData(res.data);

    } catch (error) {
      console.log("error is ", error);
    }
  };


  
  useEffect(() => {
   getSingleProductData();
  }, []);








  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Product Image */}
        <div className="bg-gray-50 flex items-center justify-center p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="w-full max-w-md h-96 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            {singleProductData.category}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mt-3">
            {singleProductData.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
              ⭐ {singleProductData.rating?.rate}
            </span>

            <span className="text-gray-500 text-sm">
              {singleProductData.rating?.count} ratings
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-gray-900 mt-6">
            ${singleProductData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-5">
            {singleProductData.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <button className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
