import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { wixClientServer } from '../../lib/wixClientServer';
import { products } from '@wix/stores';


// const PRODUCT_PER_PAGE = 20;

const Productlist = async ({ categoryId, limit, items }:  { items:any; categoryId: string; limit?: number }) => {


// const wixClient =  wixClientServer();
// const res =  (await wixClient).products
// .queryProducts()
// .eq("collectionIds"
// ,categoryId)
// .limit(limit || PRODUCT_PER_PAGE)
// .find();



  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
 { items.map((product: products.Product)=>(

        <Link href={"/"+product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        key={product._id}
        >
        <div className='relative w-full h-80'>
          <Image src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image src="https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium"> {product.name}</span>
          {/* <span className="font-semibold">${product.price}</span> */}
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <button className='rounded-2xl ring-1 ring-[#f3dc5c] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white'>Add to Cart</button>
      </Link>
  ))}
    </div>
  )
}

export default Productlist
