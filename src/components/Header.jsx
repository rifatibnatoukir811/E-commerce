import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import Flex from './Flex'
import { RxCross1 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';



const Header = () => {
    let [show, setShow] = useState(false)




    return (
        <header className='h-[80px] px-3'>
            <Container>
                <Flex className="justify-between items-center h-[80px]">
                    <div className="w-1/4">
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="w-2/4">
                        <div className="">
                            <ul className={`lg:flex z-50 justify-center lg:gap-x-10 gap-y-[20px] duration-700 ease-in-out hover:ease-in lg:static absolute top-[50px] right-0 py-[5px] pl-[5px]   ${show == true ? "bg-[gray] top-[50px] right-0 w-[120px] h-full rounded-l" : "top-[50px] right-[-200px] h-full"}`}>
                                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>
                                    <Link to="/Products">Shop</Link>
                                </li>
                                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'><Link to="/about">About</Link></li>
                                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'><Link to="/contact">Contact</Link></li>
                                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>Journal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4"></div>

                    <div className="lg:hidden" onClick={() => setShow(!show)} >
                        {show == true ? <RxCross1 className='text-[20px]' /> : <HiBars3 className='text-[20px]'/>}
                    </div>
                </Flex>
            </Container>
        </header>
    )
}

export default Header