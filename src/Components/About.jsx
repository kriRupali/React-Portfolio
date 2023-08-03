import React from 'react'

const About = () => {
  return (
    <>

    <div name='about' className='w-full h-screen bg-[#0a192f] text-grey-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline  text-gray-100 border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold text-gray-100'>
                    <p> Hi, nice to meet you.Please take a look around. </p>
                </div>
                    <div >
                      <p  className='sm:text-right text-2xl font-bold text-gray-100' >I am passionate about building excellent user interfaces.
                         having good knowledge and hands on experience  on technologies like HTML, CSS , JAVASCRIPT and REACT.JS
                      </p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About