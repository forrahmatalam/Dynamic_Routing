import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const { productsData, setProductsData } = useContext(MyStore);

  const productData = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );

      setProductsData(res.data);

    } catch (error) {
      console.log("error is ", error);
    }
  };


  
  useEffect(() => {
    productData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </div>
  );
};

export default Home;