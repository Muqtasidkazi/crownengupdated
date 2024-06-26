"use client";
import HeroMain from "@/app/custom_components/home-ui/hero-main/page";
import HeroSubMain from "@/app/custom_components/home-ui/hero-submain/page";
import React, { useEffect, useState } from "react";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/app/custom_components/product-ui/ProductCard";
const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  function testFunc() {
    console.log(productData.productCategories);
  }
  return (
    <main className="w-full relative">
      {/* <button onClick={()=>testFunc()} >test</button> */}
      <section className="w-full relative">
        <HeroMain />
        <HeroSubMain />
        <div className="lg:pt-12 pt-16 flex justify-center">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
            {loading
              ? "loading..."
              : productData.productCategories.map((item) => (
                  <ProductCard
                    keyId={item.product_name_id}
                    name={item.product_name}
                    href={`/pages/products/${item.product_name_id}`}
                  />
                ))}
          </div>
        </div>
      </section>
      <section className="h-[100vh] w-full flex justify-center mt-10">
        <div className="bg-offwhite w-[80%] lg:w-[50%] h-[80vh] border flex justify-center items-center rounded-md shadow-xl text-gray-700 font-medium">
          <span>Testimonials Coming soon...!!!</span>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
