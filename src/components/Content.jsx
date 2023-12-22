import React from 'react'

const Content = () => {
  return (
    <div id='issues'>

        <div>
            <p className='font-extrabold text-5xl text-center py-12 italic bg-teal-500 text-white'>Select a Topic and Begin Your Healing</p>
        </div>
         
        <div className='flex flex-row justify-between px-[17%] py-[5%]'>
            <a href="https://mental-harbor.vercel.app/suicide">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Fsuicide.jpg&w=640&q=75" alt="Suicude" />
            </a>
            <a href="https://mental-harbor.vercel.app/addiction">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Faddiction.jpg&w=640&q=75" alt="Addiction" />
            </a>
        </div>

        <div className='flex flex-row justify-between px-[17%] pb-[5%]'>
            <a href="https://mental-harbor.vercel.app/anxiety">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Fanxietys.jpg&w=640&q=75" alt="Anxiety" />
            </a>
            <a href="https://mental-harbor.vercel.app/depression">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Fdepressions.jpg&w=640&q=75" alt="Depression" />
            </a>
        </div>

        <div className='flex flex-row justify-between px-[17%] pb-[5%]'>
            <a href="https://mental-harbor.vercel.app/stress">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Fstresss.jpg&w=640&q=75" alt="Stress" />
            </a>
            <a href="https://mental-harbor.vercel.app/bipolar">
                <img className='w-[470px] h-[600px] hover:opacity-25' src="https://mental-harbor.vercel.app/_next/image?url=%2Fbipolar.jpg&w=640&q=75" alt="Bipolar" />
            </a>
        </div>

    </div>
  )
}

export default Content