import React,{ReactNode} from 'react'
import Image from 'next/image'
import hero1 from "@/assets/hero1.webp"
import hero2 from "@/assets/hero2.webp"
import hero3 from "@/assets/hero3.webp"
import hero4 from "@/assets/hero4.webp"


function Featured() {
    return (
        <div className='bg-zinc-200 pt-6'>
            <h1 className=''>Featured Products</h1>
            <div className='grid grid-cols-3 gap-3'>
                <div>
                    <Image src={hero1} alt=""  />
                </div>
                <div>
                    <Image src={hero1} alt=""  />
                </div>
                <div>
                    <Image src={hero1} alt=""  />                
                </div>
            </div>
        </div>
    )
}

export default Featured