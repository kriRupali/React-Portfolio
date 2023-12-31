import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTimes } from "react-icons/fa"
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px]  flex justify-between items-center bg-[#0a192f] text-gray-300'>
            <div>
            </div>
            <div>

                {/* menu */}
                <ul className='hidden md:flex  px-2 gap-4  hover:text-pink-600'>
                    <li >Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>

            </div>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* mobile menu */}
            <ul className={!nav ? ' hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col  justify-center items-center'}>
                <li className='py-10 text-4xl'>Home</li>
                <li className='py-10 text-4xl'>About</li>
                <li className='py-10 text-4xl'>Skills</li>
                <li className='py-10 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
                    <ul>
                        <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href='https://www.linkedin.com/in/rupali-kumari-/'>
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href='https://github.com/kriRupali'>
                                Github <FaGithub size={30} />
                            </a>
                        </li>

                        <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-300' >
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href='https://app.netlify.com/teams/krirupali/overview'>
                                 Netlify <SiNetlify size={30} />
                            </a>
                        </li>

                        <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0' >
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href='https://mail.google.com/mail/u/0/#inbox'>
                                Email <AiOutlineMail size={30} />
                            </a>
                        </li>


                        <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565656]f' >
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href='#'>
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                       



                    </ul>
                </div>


        </div>
    )
}

export default Navbar