import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className='bg-teal-500 h-20'>
        <AiOutlineMenu size={30} onClick={handleNav} className='absolute top-6 right-6 z-[99] lg:hidden cursor-pointer hover:scale-110'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main"
                    className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>

                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    
                    <a onClick={handleNav} href="#edu"
                    className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>

                        <GrProjects size={20} />
                        <span className='pl-4'>Education</span>
                    </a>
                    
                    <a onClick={handleNav} href="#projects"
                    className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>

                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    
                    <a onClick={handleNav} href="#resume"
                    className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>

                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    
                    <a onClick={handleNav} href="#contact"
                    className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>

                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            :
            (
                ''
            )
        }
        <div className='lg:block fixed w-full hidden z-10 bg-teal-500'>
            <header className='py-1'>
                <nav className='flex justify-between items-center w-[96%]'>
                    <div className='flex py-4 px-7 text-3xl font-extrabold'>
                        <a href="#main" className='text-white'>Mental</a><a href="#main" className='text-pink-500'>Harbor</a>
                    </div>
                    <ul className='flex items-center gap-[4vw]'>
                    <li>
                    <a href="#main" className='text-lg text-white font-extrabold cursor-pointer hover:text-black'>
                    Home
                    </a>
                    </li>
                    <li>
                    <a href="#about" className='text-lg text-white font-extrabold cursor-pointer hover:text-black'>
                        About
                    </a>
                    </li>
                    <li>
                    <a href="#issues" className='text-lg text-white font-extrabold cursor-pointer hover:text-black'>
                        Issues
                    </a>
                    </li>
                    <li>
                    <a href="#resume" className='text-lg text-white font-extrabold cursor-pointer hover:text-black'>
                        Article
                    </a>
                    </li>
                    <li>
                    <a href="#contact" className='text-lg text-white font-extrabold cursor-pointer hover:text-black'>
                        Contact
                    </a>
                    </li>
                    
                    </ul>
                    <a href="https://praneets-portfolio.netlify.app/" className='flex justify-center font-semibold rounded-full py-2 text-2xl bg-pink-500 w-[14%]'>
                        <h1 className='flex justify-center text-white hover:text-black'>MyPortfolio</h1>
                    </a>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default Sidenav