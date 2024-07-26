"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
   {
     id: 1,
     url: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
   {
     id: 2,
     url: "https://images.pexels.com/photos/446389/pexels-photo-446389.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
   {
     id: 3,
     url: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
   {
     id: 4,
     url: "https://images.pexels.com/photos/1685111/pexels-photo-1685111.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
 ];

const ProductImages = ( ) => {
    const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <div className="">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
          />
          </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
         {images.map((img,i)=>(
              <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>setIndex(i)} >
              <Image
                  src={img.url}
                  alt=""
                  fill
                  sizes="30vw"
                  className="object-cover rounded-md"
                  />
                  </div>
         ))}
          </div>
      </div>
  );
};

export default ProductImages;