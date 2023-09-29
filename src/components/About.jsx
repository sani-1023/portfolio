import React from 'react';

const About = () => {
  return (
<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> 
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sani, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I recently Graduate from Computer Science and Engineering Department, SUST.
              During my four years long graduation period, I have completed several projects on different languages and frameworks.
              In this period, I developed several web applications that utilized Nodejs, Expressjs, Reactjs, HyperLedger fabric and MongoDB. These gave me hands-on experience in 
              building scalable and efficient applications and also involved database design, server-side logic, and RESTful APIs.
                
                </p>  
            </div> 
          </div> 
      </div>
    </div>
  )

}

export default About