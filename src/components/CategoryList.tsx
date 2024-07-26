import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll'>
         <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/2779447/pexels-photo-2779447.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/6143997/pexels-photo-6143997.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/6143996/pexels-photo-6143996.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/17544887/pexels-photo-17544887/free-photo-of-sports-cars-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/6143992/pexels-photo-6143992.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/8359052/pexels-photo-8359052.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/8284632/pexels-photo-8284632.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill 
                sizes='22vw' 
                className='object-cover'
                />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'></h1>
            </Link>
         </div>
    </div>
  )
}

export default CategoryList