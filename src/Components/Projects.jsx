import React from 'react'
import spotify_react from '../Assets/spotify _react.png';
// import Spotifyjs  from "../Assets/Spotifyjs(168).png";
// import solarsystem from "../Assets/solarsystem.png";
// import netlix from "../Assets/netflix.png";
// import firefox from "../Assets/firefox.png"

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>//Check out my projects</p>
                </div>

                <div
                //  style={{backgroundImage:`($spotify_react )`}}
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <img src={spotify_react}/>
                        {/* hover effects */}
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href='/'>
                                    <button></button>
                                </a>

                                <a href='/'>
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects