import React from 'react'

const About = () => {
  return (
    <div id='main' className='bg-blue-950'>
    <div id='about'>
        <div className='text-white flex justify-center py-[8%] text-6xl font-extrabold'>
             <h1>Why We Care</h1>
        </div>

        
        <div className='flex flex-row justify-between px-[15%] gap-10 pb-[10%]'>
            <ul className='flex flex-col items-start w-[75%] border p-5 rounded-md mr-20'>
            <li className='text-3xl text-pink-600 mb-10'>Meet the Founder</li>
            <li className='mb-2 text-md font-bold text-white'>Hello, I'm Hanish Tharwani, a dedicated college student pursuing a degree in Computer Science. In this fast-paced and competitive world, I've witnessed firsthand the growing concerns around mental health. It's not just a prevalent issue; it's a pressing one, affecting countless individuals around us, including students like me.</li>
            </ul>
            <ul className='flex flex-col items-start  w-[75%] border p-5 rounded-md ml-15'>
            <li className='text-3xl text-pink-600 mb-10'>Why Mental Health Matters to Us</li>
            <li className='mb-2 text-md font-bold text-white'>In today's society, the demands and expectations placed on us can sometimes become overwhelming. The relentless pursuit of success, the constant comparison on social media, and the stressors of academic and personal life can take a toll on our mental well-being.  and depression.</li>
            </ul>
            {/* It's no surprise that many of us find ourselves battling feelings of stress, anxiety, */}
        </div>


        <div className='flex flex-row justify-between px-[15%] gap-10 pb-[10%]'>
            <ul className='flex flex-col items-start w-[90%] border p-5 rounded-md mr-20'>
            <li className='text-3xl text-pink-600 mb-10'>Our Vision and Mission</li>
            <li className='mb-2 text-md font-bold text-white'>Driven by the belief that mental health is a cornerstone of overall well-being, I decided to channel my skills in full-stack development to create something meaningful. That's how this website came into existence. Our mission is simple yet profound: to provide a safe haven where anyone, regardless of their background or age, can find support, resources, and solace.</li>
            </ul>
            <ul className='flex flex-col items-start  w-[90%] border p-5 rounded-md ml-15'>
            <li className='text-3xl text-pink-600 mb-10'>Our Commitment</li>
            <li className='mb-2 text-md font-bold text-white'>We're committed to breaking the stigma surrounding mental health. We want to create a space where you can openly discuss your feelings, fears, and triumphs. Here, you'll discover a community that listens, understands, and supports you on your journey to better mental health.</li>
            </ul>

        </div>
        

        <div className='flex flex-row justify-between px-[15%] gap-10 pb-[10%]'>
            <ul className='flex flex-col items-start w-[90%] border p-5 rounded-md mr-20'>
            <li className='text-3xl text-pink-600 mb-10'>Our Approach</li>
            <li className='mb-2 text-md font-bold text-white'>This website isn't just about technology; it's about empathy and understanding. We're here to offer a wealth of resources, from informative articles to interactive forums, all designed to help you better understand and manage your mental health. We've also collaborated with mental health professionals to provide accurate, evidence-based information.</li>
            </ul>
            <ul className='flex flex-col items-start  w-[90%] border p-5 rounded-md ml-15'>
            <li className='text-3xl text-pink-600 mb-10'>Join Our Mission</li>
            <li className='mb-2 text-md font-bold text-white'>Mental health is a shared responsibility, and together, we can make a difference. I invite you to join us on this journey. Explore our content, engage with our community, and reach out if you need assistance or just want to connect.</li>
            </ul>

        </div>
        </div>
        </div>
  )
}

export default About