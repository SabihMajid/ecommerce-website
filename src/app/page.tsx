"use client"

import CategoryList from "@/components/CategoryList"
import Productlist from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/contexts/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { Suspense, useContext, useEffect, useState } from "react";
import { wixClientServer } from "../../lib/wixClientServer";

interface ProductsQueryResult {
  // define the shape of the result here
  items: any[];
}

const HomePage = () => {
  const wixClient = useWixClient();
  const [products, setProducts] = useState<ProductsQueryResult>({ items: [] });

  useEffect(() => {
    const getProducts = async () => {
      const  ProductsQueryResult =  wixClient.products.queryProducts().find();
    };
    getProducts();
  }, [wixClient]);

  return (
    <>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"> 
        <h1 className="text-2xl font-semibold">Features Products</h1>
        <Suspense fallback={"loading"}>
          <Productlist categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} items={products.items} />
        </Suspense>
      </div>
      <div className="mt-24"> 
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 font-semibold">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"> 
        <h1 className="text-2xl font-semibold">New Products</h1>
        <Productlist categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} items={products.items} />
      </div>
    </>
  );
};

export default HomePage;