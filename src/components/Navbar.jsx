import React from 'react'

function Navbar() {
  return (
    <nav className=' navbar flex justify-between p-4 h-14  text-[1.1rem]  bg-black text-white'>
        <a href=""><div className='Logo'>SafeSpace</div></a>

        <ul className='flex gap-5'>
            <a className='hover:font-bold' href="/"><li>Home</li></a>
            <a className='hover:font-bold' href="/"><li>About</li></a>
            <a className='hover:font-bold'href="/"><li>Contact</li></a>
           
        </ul>

    </nav>
  )
}

export default Navbar