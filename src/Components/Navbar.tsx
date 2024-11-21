import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='nav'>
    <div className='logo'>
        <h2 className='logo-1'>SA</h2>
    </div>
    <div className='navigat'>
        <ul>
            <li><Link href="/" className='link' >Home</Link></li>
            <li><Link href="/about" className='link'>About</Link></li>
            <li><Link href="/projects" className='link'>Projects</Link></li>
            <li><Link href="/contact" className='link'>Contact</Link></li>
        </ul>
    </div>
    <div className='btn'>
        <button className='bt'><Link href="/" className='bt-li'>Download CV</Link></button>
    </div>
    </header>
  )
}

export default Navbar