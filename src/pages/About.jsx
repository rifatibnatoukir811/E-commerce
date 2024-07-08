import React from 'react'
import Container from '../components/Container'
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
import aboutone from '../assets/about.png';
import abouttwo from '../assets/about2.png';
import Flex from '../components/Flex'



const About = () => {
    return (
        <Container>
            <div className="mt-3">
                <h2 className='text-black font-sans font-semibold text-[40px]'>About</h2>
                <p className='flex items-center text-[#767676]'>
                    <Link to="/">Home</Link>
                    <RxCaretRight />   About</p>

                <Flex className="justify-between gap-x-6 mt-[136px]">
                    <div className="w-[780px] h-[776px]">
                        <img className='w-full h-full' src={aboutone} alt="" />
                    </div>
                    <div className="w-[780px] h-[776px]">
                        <img className='w-full h-full' src={abouttwo} alt="" />
                    </div>
                </Flex>
                <p className='text-[39px] mt-[128px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                <Flex className="justify-between gap-x-7 mt-[108px] mb-[108px]">
                    <div className="w-[507px] h-[197px]">
                        <h3 className='font-bold text-[20px] font-sans mb-3'>Our Vision</h3>
                        <p className='font-sans text-justify landing-[197px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-[507px] h-[197px]">
                        <h3 className='font-bold text-[20px] font-sans mb-3'>Our Vision</h3>
                        <p className='font-sans text-justify landing-[197px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-[507px] h-[197px]">
                        <h3 className='font-bold text-[20px] font-sans mb-3'>Our Vision</h3>
                        <p className='font-sans text-justify landing-[197px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    
                </Flex>
            </div>
        </Container>
    )
}

export default About