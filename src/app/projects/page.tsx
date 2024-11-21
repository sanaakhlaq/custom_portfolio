import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const project = () => {
  return (
    <div>
        <h1 className='heading'>My Projects</h1>
        <div className='project'>
            <h2 className='pro-h2'>Here are a few of my projects:</h2>
            <p className='pro-p'>Static Resume Builder: A straightforward tool created using HTML and CSS, allowing users to craft clean and structured resumes effortlessly.
Dynamic Resume Builder: A feature-rich application with customizable templates, built with advanced technologies like TypeScript and Node.js.
To-Do List App: A React-based application for efficient task management, helping users organize daily tasks and achieve long-term goals.</p>

        </div>
       <div className='main'>
      <div className='card'>
        <Image src="/public/projects_02.jpg" alt="img" width={200} height={200} className="img2"/>
        <h3 className='card-h'>Static Resume Builder</h3>
        <p className='card-p'>Static Resume Builder: A straightforward tool created using HTML and CSS, allowing users to craft clean and structured resumes effortlessly.</p>
        <span><Link href=""></Link></span>
        <div className='tag-btn'>
          <button className='tag'>HTML</button>
          <button className='tag'>TypeScript</button>
          <button className='tag'>Node.js</button>
          <button className='tag'>CSS</button>
        </div>
      </div>
      <div className='card'>
        <Image src="/public/projects_01.jpg" alt="" width={200} height={200} className='img2'/>
        <h3 className='card-h'>Dynamic Resume Builder</h3>
        <p className='card-p'>Dynamic Resume Builder: A feature-rich application with customizable templates, built with advanced technologies like TypeScript and Node.js.</p>
        <span><Link href=""></Link></span>
       <div>
        <button>HTML</button>
        <button>CSS</button>
        <button>Node.js</button>
        <button>TypeScript</button>
       </div>
      </div>
      <div className='card'>
      <Image src="/public/projects_03.jpg" alt="" width={200} height={200} className='img2'/>
      <h3 className='card-h'>ToDo List</h3>
      <p className='card-p'>To-Do List App: A React-based application for efficient task management, helping users organize daily tasks and achieve long-term goals.</p>
      <span><Link href=""></Link></span>
     <button>React</button>
     <button>TypeScript</button>
     <button>CSS</button>
     <button>Node.js</button>
      </div>
       </div>
      </div>
      
      
    
  )
}
export default project