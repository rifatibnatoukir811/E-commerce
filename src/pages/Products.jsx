import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Post from '../components/pagination/Post.jsx'
import { apiData } from '../components/ContextApi'
import PaginationArea from '../components/pagination/PaginationArea'
import { RiLayoutGridLine } from "react-icons/ri";
import { TiThList } from "react-icons/ti";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom'




const Products = () => {
    let data = useContext(apiData)

    let [currentpage, setCurrentpage] = useState(1)
    let [perpage, setPerpage] = useState(9)
    let [catshow, setCatShow] = useState(false)
    let [Category, setCategory] = useState([])
    let [categorySearchfilter, setCategorySearchfilter] = useState([])
    let [multiList, showMultiList] = useState('showMultiList')

    let lastpage = currentpage * perpage
    let fristpage = lastpage - perpage

    let allData = data.slice(fristpage, lastpage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(categorySearchfilter.length > 0 ? categorySearchfilter : data.length / perpage); i++) {
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

    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category))
        ])
    }, [data])

    let handleSubcata = (citem) => {
        let categoryFilter = data.filter((item) => item.category == citem)
        setCategorySearchfilter(categoryFilter)
    }

    let handleList = () => {
        showMultiList("active");
    }


    return (
        <section className='pt-[30px] lg:py-0 px-4'>
            <Container>
                <div className="">
                    <h2 className='text-black font-sans font-semibold text-[40px]'>Products</h2>
                    <p className='flex items-center text-[#767676]'>
                        <Link to="/">Home</Link>
                        <RxCaretRight />   Products</p>
                </div>
                <div className='lg:flex'>
                    <div className="lg:w-1/6 w-full pt-[20px]">
                        <div className="gap-x-[20px]">
                            <div className=''>
                                <h2 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[17px] text-[12px] font-bold text-[#262626] lg:pb-6 py-2 '>Shop by Category</h2>
                                {catshow &&
                                    <ul >
                                        {Category.map((item) => (
                                            <li onClick={() => handleSubcata(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>{item}</li>
                                        ))}
                                    </ul>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-5/6 w-full lg:pt-[20px] pt-6 pb-[60px]">
                        <div className="flex justify-between items-center px-4">
                            <div className="flex gap-x-3">
                                <div onClick={()=>showMultiList("")} className="h-[40px] w-[40px] flex justify-center cursor-pointer items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#F0F0F0] text-[20px]"><RiLayoutGridLine /></div>
                                <div onClick={handleList} className="h-[40px] w-[40px] flex justify-center cursor-pointer text-[#737373] items-center hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#F0F0F0] text-[20px]"><TiThList /></div>
                            </div>
                            <div className="lg:w-[310px] lg:h-[36px] lg:flex items-center text-center">
                                <label htmlFor="">Sort by:</label>
                                <select className='border-[#F0F0F0] border-[1px] lg:w-[239px] lg:h-[36px] ml-2 text-start px-2'>
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
                            <div className="text-center">
                                <label htmlFor="">Show:</label>
                                <select className='border-[#F0F0F0] border-[1px] lg:w-[139px] lg:h-[36px] ml-2 text-start px-2'>
                                    <option value="lg:flex">
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
                        <Post allData={allData} categorySearchfilter={categorySearchfilter} multiList={multiList} />
                    </div>
                </div>
                <div className="lg:text-end text-center pb-[20px]">
                    <PaginationArea pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} prev={prev} next={next} />
                </div>
            </Container>
        </section>
    )
}

export default Products