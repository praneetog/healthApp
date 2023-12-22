import React from 'react'

const Main = () => {
  return (
    <div id='main' className='bg-blue-950'>
        <div className='flex flex-col justify-center font-extrabold pt-32 text-7xl'>
            <p className='text-center text-white px-[15%]'>
                Your Source of Strength for Mental Health & Wellness
            </p>
            
        </div>

        <div className='flex flex-col justify-center py-6 text-2xl'>
            <p className='text-center text-gray-400 text-white'>Explore below to uncover the pathways to healing and</p>
            <p className='text-center text-gray-400 text-white'>discover solutions for your mental well-being.</p>
        </div>

        <div className='flex justify-center py-20'>
            <a href="#content" className='flex justify-center font-semibold rounded-full p-5 text-2xl bg-pink-500 h-20 w-[30%]'>
                <h1 className='flex justify-center text-white hover:text-black'>Begin Your Journey</h1>
            </a>
        </div>
        <div>
            <img src="https://mental-harbor.vercel.app/An1.svg" alt="img" className='flex max-w-full px-[30%] justify-center '/>
        </div>

        <hr className='bg-gray-500 h-1/4 border-gray-500'/>

        

    </div>
  )
}

export default Main