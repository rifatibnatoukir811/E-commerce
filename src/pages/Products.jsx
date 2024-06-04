import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Post from '../components/pagination/Post.jsx'
import { apiData } from '../components/ContextApi'
import PaginationArea from '../components/pagination/PaginationArea'
import { RiLayoutGridLine } from "react-icons/ri";
import { TiThList } from "react-icons/ti";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";




const Products = () => {
    let data = useContext(apiData)

    let [currentpage, setCurrentpage] = useState(1)
    let [perpage, setPerpage] = useState(9)

    let lastpage = currentpage * perpage
    let fristpage = lastpage - perpage

    let allData = data.slice(fristpage, lastpage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / perpage); i++) {
        pageNumber.push(i)
    }

    let paginate = (pageNumber) => {
        setCurrentpage(pageNumber + 1);
    }

    let prev = () => {
        if (currentpage > 1) {
            setCurrentpage((state) => state - 1)
        }
    }
    let next = () => {
        if (currentpage < pageNumber.length) {
            setCurrentpage((state) => state + 1)
        }
    }


    return (
        <section className='pt-[120px]'>
            <Container>
                <div className="">
                    <h2 className='text-black font-sans font-semibold text-[40px]'>Products</h2>
                    <p className='flex items-center text-[#767676]'>Home <RxCaretRight />   Products</p>
                </div>
                <Flex >
                    <div className="w-1/6 pt-[126px] pb-[60px]">
                        <div className="gap-x-[20px]">
                            <div className="">
                                <h2 className='font-sans lg:text-[17px] text-[12px] font-bold text-[#262626] lg:pb-6 py-2 '>Shop by Category</h2>
                                <ul >
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                </ul>
                            </div>
                            <div className="">
                                <h2 className='font-sans lg:text-[17px] mt-3 text-[12px] font-bold text-[#262626] lg:py-6 py-2 '>Shop by Color</h2>
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Color 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Color 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Color 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Color 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Color 1</li>
                                </ul>
                            </div>
                            <div className="">
                                <h2 className='font-sans lg:text-[17px] mt-3 text-[12px] font-bold text-[#262626] lg:py-6 py-2 '>Shop by Brand</h2>
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                </ul>
                            </div>
                            <div className="">
                                <h2 className='font-sans lg:text-[17px] mt-3 text-[12px] font-bold text-[#262626] lg:py-6 py-2 '>Shop by Price</h2>
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$0.00 - $9.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$10.00 - $19.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$20.00 - $29.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$30.00 - $39.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$40.00 - $69.99</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="w-5/6 pt-[126px] pb-[60px]">
                        <div className="flex justify-between items-center px-4">
                            <div className="flex gap-x-3">
                                <div className="h-[40px] w-[40px] flex justify-center cursor-pointer items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#F0F0F0] text-[20px]"><RiLayoutGridLine /></div>
                                <div className="h-[40px] w-[40px] flex justify-center cursor-pointer text-[#737373] items-center hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#F0F0F0] text-[20px]"><TiThList /></div>
                            </div>
                            <div className="w-[310px] h-[36px] flex items-center">
                                <label htmlFor="">Sort by:</label>
                                <select className='border-[#F0F0F0] border-[1px] w-[239px] h-[36px] ml-2 text-start px-2'>
                                    <option className='gap-x-[20px]' value="">
                                        <div className="flex justify-between">
                                            <p>Featured</p>
                                            <div className="px-4">
                                                <IoMdArrowDropdownCircle />
                                            </div>
                                        </div></option>
                                    <option value="">Price</option>
                                    <option value="">Category</option>
                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="">Show:</label>
                                <select className='border-[#F0F0F0] border-[1px] w-[139px] h-[36px] ml-2 text-start px-2'>
                                    <option value="flex">
                                        <div className="">
                                            <p>36</p>
                                            <div className="">
                                                <IoMdArrowDropdownCircle />
                                            </div>
                                        </div>
                                    </option>
                                    <option value="">one</option>
                                    <option value="">one</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex pt-[10px] justify-between flex-wrap">
                            <Post allData={allData} />
                        </div>
                    </div>
                </Flex>
                <div className="text-center pb-[20px]">
                    <PaginationArea pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} prev={prev} next={next}/>
                </div>
            </Container>
        </section>
    )
}

export default Products