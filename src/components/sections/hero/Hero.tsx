import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero2 from "@/assets/hero2.webp"

function Hero() {
    return (
        <div  className='container mx-auto mb-4'>
            <section className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                <div className='flex flex-col justify-center items-start '>
                    <h1 className='font-bold  text-4xl mb-5'>Design your comfort zone</h1>
                    <p className=' font-semibold text-gray-400 text-base mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus facere sit 
                        modi exercitationem assumenda, voluptatibus velit impedit labore veritatis.
                    </p>
                    <Link href="/products" className=' bg-cyan-500 px-2 py-1 text-white '>SHOP NOW</Link>
                </div>
            
                <div className='flex items-center justify-end'>
                    <Image src={hero2} alt='' className='w-2/3'/>
                </div>
            </section>
        </div>
    )
}

export default Hero