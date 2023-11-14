import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div className=' shadow-sm'>
            <nav className=' container mx-auto flex justify-between items-center h-12'>
                <div>
                    <Image src='' alt='' className=''/>
                </div>
                
                <div className=' flex justify-between items-center gap-3 '>
                    <Link  href="">Home</Link>
                    <Link  href="">About</Link>
                    <Link  href="">Products</Link>
                </div>
            
                <div className='flex justify-between items-center w-28'>
                    <div className='flex justify-between items-center'>
                        <h3 className=' font-semibold text-base'> Cart </h3>
                        <i></i>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h3 className=' font-semibold'> Login </h3>
                        <i></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
