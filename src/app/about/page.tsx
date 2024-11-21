import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from "react-icons/fa";





const About = () => {
  return (
    <div>
        <h1 className='heading'>About Me</h1>
        <Image src="/public/sana_image.png" alt="img" width={400} height={350} className="img1"/>
        <h2 className='about-1'>Student Of GIAIC Metaverse Web 3.0</h2>
        <p>I am a dedicated student at GIAIC, specializing in IT and Metaverse technologies.
My learning journey focuses on mastering cutting-edge web development and immersive digital experiences.
I aim to contribute to the evolving world of virtual and augmented realities., I aim to create impactful solutions in virtual and immersive digital spaces.</p>
   <div className='btn3'>
    <button className='bt2'><FaLinkedin className="icons"/></button>
    <button className='bt2'><FaGithub className="icons"/></button>
    <button className='bt2'></button>
    <button className='bt2'></button>
    <button className='bt2'></button>
    
   </div>
   <Skills/>

   
    </div>
    

  )
}

export default About

export const Skills =() =>{
    return(
        <div>
               <h1 className='heading'>My Skills</h1>
               <div>
                <h2 className='skills-h2'>HTML</h2>
                <div className='bar'></div>
               </div>
               <div>
                <h2 className='skills-h2'>CSS</h2>
                <div className='bar1'></div>
               </div>
               <div>
                <h2 className='skills-h2'>TypeScript</h2>
                <div className='bar2'></div>
               </div>
               <div>
                <h2 className='skills-h2'>Next.JS</h2>
                <div className='bar3'></div>
               </div>
               <div>
                <h2 className='skills-h2'>React</h2>
                <div className='bar4'></div>
               </div>
            
        </div>
    )
}