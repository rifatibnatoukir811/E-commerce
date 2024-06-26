import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/productSlice';






const ArrivalsItem = ({ item }) => {
    let dispatch = useDispatch()


    let handleAddTocart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
    }
    return (
        <div className="">
            <div className="lg:w-[98%] w-full px-4 py-5">
                <div className="relative group overflow-hidden cursor-pointer">
                    <img src={item.thumbnail} className='lg:h-[376px] lg:w-[376px]' alt="" />
                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                        <ul className='pr-5'>
                            <li className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Wish List<CiHeart /></li>
                            <li className='flex justify-end items-center gap-x-4 font-sans text-[16px] py-3'>Compare<TfiReload /></li>
                            <li onClick={() => handleAddTocart(item)} className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Cart<CiShoppingCart /></li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-[#26262669] absolute left-4  top-[25px] lg:py-[5px] lg:px-[10px] bg-black text-white font-sans lg:text-[10px] font-bold'>{item.discountPercentage}% off</p>
                    </div>
                </div>
                <div className="lg:flex justify-between pt-3">
                    <div className="">
                        <h2 className='text-[#262626] font-sans text-[16px] font-bold'>{item.title}</h2>
                    </div>
                    <div className="">
                        <span className='text-[#26262689] font-sans text-[16px] font-bold'>${item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArrivalsItem