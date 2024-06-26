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




const Products = () => {
    let data = useContext(apiData)

    let [currentpage, setCurrentpage] = useState(1)
    let [perpage, setPerpage] = useState(9)
    let [catshow, setCatShow] = useState(false)
    let [Category, setCategory] = useState([])
    let [categorySearchfilter, setCategorySearchfilter] = useState([])

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
                            <Post allData={allData} categorySearchfilter={categorySearchfilter} />
                        </div>
                    </div>
                </Flex>
                <div className="lg:text-end pb-[20px]">
                    <PaginationArea pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} prev={prev} next={next} />
                </div>
            </Container>
        </section>
    )
}

export default Products