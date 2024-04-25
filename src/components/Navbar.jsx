import React from 'react'

function Navbar() {
  return (
    <nav className=' navbar flex justify-between p-4 h-[4rem]  text-[1.1rem] bg-black text-slate-100'>
        <a href=""><div className='Logo text-[1.3rem] '>SafeSpace</div></a>

        <ul className='flex gap-4 font-semilight text-slate-100'>
            <a className='hover:font-semibold' href="/"><li className=' border-2  border-[#8573dd] rounded-md hover:bg-[#8573dd] p-1 w-20 text-center'>Login</li></a>
            <a className='hover:font-bold' href="/"><li className=' border-2  border-[#4431a2] rounded-md hover:bg-[#4431a2] p-1 text-center w-20'>Signup</li></a>
           
        </ul>

    </nav>
  )
}

export default Navbar