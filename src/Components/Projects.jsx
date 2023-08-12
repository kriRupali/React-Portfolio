import React from 'react';
import spotify_react from '../Assets/spotify_react.png';
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

                <div className='flex flex-wrap gap-5'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project1'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-white tracking wider text-center'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project2'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-white tracking wider text-center'>
                                Javascript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project3'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-gray-800 tracking wider text-center'>
                                Javascript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project4'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-white tracking wider text-center'>
                                Javascript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project5'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-white tracking wider text-center'>
                                CSS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div custom-project6'>
                        {/* <img src={spotify_react} style={{ height: "150px", width: "300px" }} className='' /> */}
                        <div className='opacity-0 group-hover:opacity-100 position-absolute'>
                            <span className='text-xl font-bold text-white tracking wider text-center'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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