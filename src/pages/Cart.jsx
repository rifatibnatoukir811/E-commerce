import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import cartimg from '../assets/cart.png'
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../components/slice/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';


const Cart = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let data = useSelector((state) => state.product.cartItem)
    let handleIncrement = (index) => {
        dispatch(productIncrement(index))
    }
    let handledecrement = (index) => {
        dispatch(productDecrement(index))
    }
    let handleRemove = (index) => {
        dispatch(removeProduct(index))
    }
    const { totalPrice, totalquantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalquantity += item.qun
        return acc
    }, { totalPrice: 0, totalquantity: 0 })

    let handleCheckout = () => {
        toast("Way To Easy")
        setTimeout(() => {
            navigate("/checkout")
        }, 2000);
    }


    return (
        <section className='py-[60px]'>
            <Container>
                <h2 className='text-[25px] font-bold text-[#262626]'>Cart</h2>
                <p className='text-[8px] font-normal text-[#6D6D60]'>Home &gt; Cart</p>
                <Flex className='justify-between py-[34px] px-4 bg-[#F5F5F3] mt-4'>
                    <div className="w-[40%] font-sans font-bold">Product</div>
                    <div className="w-[15%] font-sans font-bold text-center">Price</div>
                    <div className="w-[30%] font-sans font-bold text-center">Quantity</div>
                    <div className="w-[25%] font-sans font-bold text-center">Total</div>
                </Flex>
                {data.map((item, index) => (
                    <Flex className='justify-between py-[34px] px-4 mt-2 items-center'>
                        <div className="w-[40%] flex items-center gap-x-[60px]">
                            <div className="" onClick={() => handleRemove(index)}>
                                <RxCross2 className='font-sans font-semibold' />
                            </div>
                            <div className="">
                                <img className='w-[100px] h-[100px]' src={item.images} alt="" />
                            </div>
                            <div className="">
                                <p>{item.title}</p>
                            </div>
                        </div>
                        <div className="w-[15%] text-center">
                            <p className='font-sans font-semibold'>${item.price}</p>
                        </div>
                        <div className="w-[30%] text-center">
                            <div className='flex justify-center gap-x-[29px]'>
                                <div className='w-[150px] flex justify-around'>
                                    <div className="" onClick={() => handledecrement(index)}>-</div>
                                    <div className="font-sans font-semibold">{item.qun}</div>
                                    <div onClick={() => handleIncrement(index)} className="">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%] text-center">
                            <p className='font-sans font-semibold'>${item.price * item.qun}</p>
                        </div>
                    </Flex>
                ))}
                <Flex className="justify-between items-center">
                    <div className="justify-between ">
                        <div className="flex justify-between items-center" >
                            <div className="border-[1px] border-[#EAEAEA]">
                                <select className='w-[250px] h-[50px] border-none'>
                                    <option className='font-sans text-[16px] font-bold text-black' value="">SIZE</option>
                                    <option className='font-sans text-[10px] text-black' value="">One</option>
                                    <option className='font-sans text-[10px] text-black' value="">Two</option>
                                    <option className='font-sans text-[10px] text-black' value="">Three</option>
                                    <option className='font-sans text-[10px] text-black' value="">Four</option>
                                </select>
                            </div>
                            <div className="pl-[10px]">
                                <p className='font-sans text-[16px] font-bold text-black'>Apply coupon</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className='font-sans text-[16px] font-bold text-black'>Update cart</p>
                    </div>
                </Flex>
                <div className="flex justify-end pt-7">
                    <div className="">
                        <div className="w-[644px]">
                            <h2 className='text-right text-[15px] font-sans font-bold pb-3'>Cart totals</h2>
                            <div className="flex justify-between pb-3">
                                <div className="font-sans font-bold">Subtotal</div>
                                <div className="font-sans">{totalPrice}$</div>
                            </div>
                            <div className="flex justify-between pb-3">
                                <div className="font-sans font-bold">Quantity</div>
                                <div className="font-sans">{totalquantity}</div>
                            </div>
                            <div className="flex justify-between pb-3">
                                <div className="font-sans font-bold">Total</div>
                                <div className="font-sans">{totalPrice}$</div>
                            </div>
                            <div className="text-right mt-10" onClick={handleCheckout}>
                                <a className='font-sans font-bold text-white py-6 px-20 bg-black' href="#">Proceed to Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Container>

        </section>
    )
}

export default Cart