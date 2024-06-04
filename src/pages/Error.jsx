import React from 'react'
import Container from '../components/Container'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <>
            <Container>
                <h1 className='text-[200px] font-bold font-sans'>404</h1>
                <p className='text-[16px] font-sans w-[644px] text-[#767676]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                <div className="flex w-[643px] h-[71px] items-center relative mt-4 border-[1px] border-[#F0F0F0] mb-[30px]">
                    <div className="w-full h-full">
                        <input className='w-full h-full px-[10px]' placeholder='Type to search' type="text" />
                    </div>
                    <div className="w-[16px] h-[16px] absolute right-[25px] translate-y-[-50%]">
                        <CiSearch className='text-[25px]' />
                    </div>
                </div>
                <div className="pb-[150px]">
                    <Link className='py-[10px] px-[20px] font-sans border border-black text-center duration-300 ease-in-out leading-[50px]  hover:bg-black hover:text-white hover:rounded' to="/">
                        <a  href="">Back to Home</a>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default Error