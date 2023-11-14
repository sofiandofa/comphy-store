import Featured from '@/components/sections/featuredProducts.tsx/featured'
import Hero from '@/components/sections/hero/Hero'
import Image from 'next/image'


export default function Home() {

  return (
      <section>
        <Hero/>
        <Featured/>
      </section>

  )
}
