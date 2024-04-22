import React from 'react'

export const Manager = () => {
  return (
   <>
   <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

   <div className="container my-20 mx-auto h-72 border-2 w-1/2 flex flex-col items-center bg-gray-100 rounded-xl">
        <div className='my-8'>
            <h1 className='text-3xl text-center font-light'>Safe Space</h1>
        </div>
        <div className='flex flex-col gap-4 items-center '>
          <input className=' border-2 border-slate-300 rounded-lg w-full px-1 py-1' type="text"
          placeholder='Enter website url' />
          <div className=' flex gap-8'>
            <input className=' border-2 border-slate-300 rounded-lg w-1/2 px-1 py-1' type="text" 
            placeholder='Enter username'/>
            <input className=' border-2 border-slate-300 rounded-lg w-1/2 px-1 py-1' type="text"
            placeholder='Enter password' />
          </div>
          <button className='flex justify-center w-fit  rounded-full items-center px-1 py-2'>
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover" 
          style = {{width : "2.5rem", height : "2.3rem"}}/>
          </button>
        </div>
   </div>

    
   </>
  )
}
