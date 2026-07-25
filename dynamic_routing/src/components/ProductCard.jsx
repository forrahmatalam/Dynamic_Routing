import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

    let navigate = useNavigate();
   
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition">
      
      {/* Image */}
      <div onClick={() => navigate(`/detail/${product.id}`)} className="h-56 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg mt-5 line-clamp-2">
        {product.title}
      </h2>

      {/* Category */}
      <p className="text-sm text-gray-500 mt-2">
        {product.category}
      </p>

      {/* Price */}
      <p className="text-xl font-bold mt-3">
        ${product.price}
      </p>

      {/* Button */}
      <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        View Product
      </button>
    </div>
  );
};

export default ProductCard;