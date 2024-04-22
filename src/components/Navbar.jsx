import React from 'react'

function Navbar() {
  return (
    <nav className=' navbar flex justify-between p-4 h-14  text-[1.1rem]  bg-black text-white'>
        <div className='Logo'>SafeSpace</div>

        <ul className='flex gap-5'>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Contact</li></a>
           
        </ul>

    </nav>
  )
}

export default Navbar