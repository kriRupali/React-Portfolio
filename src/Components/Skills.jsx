import React from 'react';
import Html from '../Assets/Html.png';
import Css from '../Assets/Css.png';
import jspng from '../Assets/jspng.png';
import github from '../Assets/github.jpg';
import RPNG from '../Assets/RPNG.png';
import netlify from '../Assets/netlify.png';
import images from '../Assets/images.png';

const Skills = () => {
    return (
        <>
            <div name='skills' className='bg-[#0a192f]'>
                {/* container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
                    <div>
                        <p className='text-4xl font-bold text-gray-100  py-4 inline border-b-4 border-pink-600'>Skills</p> <br/><br/>
                         //Technologies I'have worked with
                    </div>
                 <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-16'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Html} alt='Html icon' />
                        <p className='my-4  text-gray-100'>HTML</p>
                    </div>
                  
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Css} alt='css icon' />
                        <p className='my-4  text-gray-100'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={jspng} alt='js icon' />
                        <p className='my-4  text-gray-100'>JAVASCRIPT</p>
                    </div>
                 

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={RPNG} alt='react icon' />
                        <p className='my-4  text-gray-100'>REACT</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={github} alt='github icon' />
                        <p className='my-4  text-gray-100'>GITHUB</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={netlify} alt='netlify icon' />
                        <p className='my-4  text-gray-100'>NETLIFY</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={images} alt='sql icon' />
                        <p className='my-4  text-gray-100'>MYSQL</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills