import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs';


const Navbar = () => {
    const [navView, setNavView] = useState(false);


    const handleNav = () => {

        setNavView(!navView)
    }


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <TypeAnimation
                    sequence={[
                        "Hi I'm Rameez Qazi",
                        1000,
                        "I Love to Code",
                        1000,
                        "Tech Geek",
                        1000,
                        "Front-End Developer",
                        1000,
                    ]}
                    speed={50}
                // repeat={Infinity}
                // style={{ fontSize: '1em' }}
                />

            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


            {/* Humberger Menu */}
            <div className='md:hidden z-20 text-xl' onClick={handleNav}>
                {!navView ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!navView ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>

            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0A66C2]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#BB001B]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            Email <MdEmail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillFileEarmarkPersonFill size={30} />
                        </a>
                    </li>
                    
                   
                    
                </ul>

            </div>



        </div>
    )
}

export default Navbar
