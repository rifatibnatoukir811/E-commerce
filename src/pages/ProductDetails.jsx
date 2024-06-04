import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import axios from 'axios';
import Flex from "../components/Flex";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { AiFillCaretDown } from 'react-icons/ai';
import Faccordian from '../components/Faccordian';
import { Link } from 'react-router-dom';
import cart from '../pages/Cart'
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';



const ProductDetails = ({ }) => {
    let [singleData, setSingleData] = useState([]);
    let productId = useParams();
    let dispatch = useDispatch()

    let getData = () => {
        axios
            .get(`https://dummyjson.com/products/${productId.id}`)
            .then((response) => {
                setSingleData(response.data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    let clientRating = Array.from({ length: 5 }, (elm, index) => {
        let ratingNumber = index + 0.5
        return (
            singleData.rating >= index ? <FaStar /> : <FaRegStar />
        )
    })

    let handleAddTocart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
    }
    return (
        <>
            <Container>
                <div className="">
                    <Container>
                        <Flex className="flex-wrap justify-between mb-[100px]">
                            {singleData?.images?.map((item) => (
                                <div className="w-[48%] my-4">
                                    <img src={item} alt="Pdetails" />
                                </div>
                            ))}
                        </Flex>
                        <div className="">
                            <div className="">
                                <p className='font-bold text-[39px] pb-[10px]'>{singleData.title}</p>
                                <div className='flex items-center gap-x-6 mb-6 '>
                                    <div className='flex text-[#FFD881] text-lg '>
                                        {clientRating}
                                    </div>
                                    <div>

                                        <p className='text-primary font-DM text-sm'>{singleData.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-secondary text-xl font-bold'>${singleData.price}</p>
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
                                <p>{singleData.stock}</p>
                            </div>
                            <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
                            {/* in stock */}
                            <div className='flex items-center gap-x-5'>
                                <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px] hover:bg-black hover:text-white hover:rounded hover:text-[16px]">Add to Wish List</div>
                                <Link to="/cart" onClick={() => handleAddTocart(singleData)}>
                                    <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px]  hover:bg-black hover:text-white hover:rounded hover:text-[16px]">Add to Cart</div>
                                </Link>
                            </div>
                        </div>
                        <Faccordian />
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default ProductDetails