import React from 'react'
import { Link } from 'react-router-dom';
import { RxCaretRight } from "react-icons/rx";
import Container from '../components/Container'


const Contact = () => {
    return (
        <Container>
            <div className="mt-3">
                <h2 className='text-black font-sans font-semibold text-[40px]'>Contacts</h2>
                <p className='flex items-center text-[#767676]'>
                    <Link to="/">Home</Link>
                    <RxCaretRight />   Contacts</p>
            </div>
            <h1 className='font-bold font-sans text-[50px] mt-[120px]'>Fill up a Form</h1>
            <div className="mt-[60px]">
                <h4 className='font-sans text-[20px] font-bold'>Name</h4>
                <input className='w-full h-[35px]' placeholder='type name here' type="text" />
            </div>
            <div className="mt-8">
                <h4 className='font-sans text-[20px] font-bold'>Email</h4>
                <input className='w-full h-[35px]' placeholder='Your email here' type="email" />
            </div>
            <div className="mt-8">
                <h4 className='font-sans text-[20px] font-bold'>Message</h4>
                <input className='w-full h-[35px]' placeholder='Your message here' type="text" />
            </div>
            <div className="w-[200px] mt-5 mb-6">
                <h4 className='font-sans text-[20px] py-4 px-7 hover:bg-black hover:text-white duration-300 text-center border border-black'>Post</h4>
            </div>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.893406133924!2d90.35511960194248!3d24.748557068096886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1720188985917!5m2!1sen!2sbd"   className='w-full h-[450px] mb-10 mt-[70px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>

    )
}

export default Contact