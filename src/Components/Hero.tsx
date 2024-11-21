import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className="hero">
        <div className='img-div' >
            <Image
             src="/public/sana_image.png"
             alt="image" 
             width={400} 
             height={350}
             className="rounded-full object"
             
             />
        </div>
        <div className='info-div'>
            <div>
                <h1 className='name'> Hello <br/> I am <br/> Sana Akhlaq</h1>
                <div className='btn2'>
                    <button className='bt1'><Link href="/" className='bt-li'> About Me</Link></button>
                    <button className='bt1'><Link href="contact" className='bt-li' >Contact Me</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero