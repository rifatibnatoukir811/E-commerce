import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";




const Copyright = () => {
    return (
        <section className='bg-[#F5F5F3] pb-10'>
            <Container>
                <div className="lg:flex w-full text-center">
                <div className="lg:w-1/2  w-full ">
                        <div className="flex lg:justify-start justify-center items-center">
                            <FaFacebookF className='font-dmsans text-[24px] text-[#262626]' />
                            <FaLinkedinIn className='font-dmsans text-[27px] text-[#262626]' />
                            <FaInstagram className='font-dmsans text-[27px] text-[#262626]' />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full text-center lg:text-end">
                        <p className='font-sans py-1 text-[#6D6D6D] text-[14px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Copyright