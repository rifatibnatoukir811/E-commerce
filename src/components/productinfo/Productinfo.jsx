import React from 'react'
import Container from '../Container'
import oneimg from "../../assets/spefour.png"
import { AiFillStar } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'



const Productinfo = () => {
    return (
        <>
            <Container>
                <div className="pt-[63px] pb-[425px]">
                    {/* image */}
                    <div className="">
                        <img src={oneimg} className="className='h-[450px] w-[450px]" alt="" />
                        <p className='font-bold text-[39px]'>Product</p>
                    </div>
                    {/* image */}
                    <div className="">
                        <div className='flex items-center gap-x-6 mb-6 '>
                            <div className='flex text-[#FFD881] text-lg '>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div>
                                <p className='text-primary font-DM text-sm'>1 Review</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-secondary text-xl font-bold'>$4000</p>
                    </div>
                    {/* colour */}
                    <div className='flex gap-x-[53px] items-center mt-[20px] mb-[30px]'>
                        <p>COLOR:</p>
                        <div className='flex gap-x-4'>
                            <div className='w-5 h-5 bg-[#979797] rounded-full hover:scale-[1.5] duration-300'></div>
                            <div className='w-5 h-5 bg-[#FF8686] rounded-full hover:scale-[1.5] duration-300'></div>
                            <div className='w-5 h-5 bg-[#7ED321] rounded-full hover:scale-[1.5] duration-300'></div>
                            <div className='w-5 h-5 bg-[#E6F7D4] rounded-full hover:scale-[1.5] duration-300'></div>
                            <div className='w-5 h-5 bg-[#D1F5EE] rounded-full hover:scale-[1.5] duration-300'></div>
                        </div>
                    </div>
                    {/* colour */}
                    {/* size */}
                    <div className='flex gap-x-[76px] mb-[30px] items-center'>
                        <p className='font-bold'>SIZE:</p>
                        <div className='flex w-[139px] border-2 border-[#F0F0F0]'>
                            <div>
                                <select className='border-[#F0F0F0] border-[1px] w-[239px] h-[36px] ml-2 text-start px-2'>
                                    <option className='gap-x-[20px]' value="">
                                        <div className="flex justify-between">
                                            <div className="px-4">
                                                <span >25</span>
                                                <AiFillCaretDown />
                                            </div>
                                        </div></option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                    <option value="">XL</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* size */}
                    {/* quantity */}
                    <div className='flex gap-x-[29px]'>
                        <p>QUANTITY:</p>
                        <div className='w-[139px] border-2 border-[#F0F0F0] flex justify-around'>
                            <button >-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                    {/* quantity */}
                    {/* in stock */}
                    <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
                    <div className='flex gap-x-7'>
                        <p>STATUS:</p>
                        <p>In stock</p>
                    </div>
                    <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
                    {/* in stock */}
                    <div className='flex items-center gap-x-5'>
                        <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px] hover:bg-black hover:text-white hover:rounded hover:text-[16px]">View Cart</div>
                        <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px]  hover:bg-black hover:text-white hover:rounded hover:text-[16px]">Checkout</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Productinfo