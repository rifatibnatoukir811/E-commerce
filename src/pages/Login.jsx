import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Login = () => {
    return (

        <Container>
            <div className="mt-3">
                <h2 className='text-black font-sans font-semibold text-[40px]'>Login</h2>
                <p className='flex items-center text-[#767676]'>
                    <Link to="/">Home</Link>
                    <RxCaretRight />   Login</p></div>

                    <p className='mt-[128px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <h3 className='font-bold text-[30px] mt-[120px]'>Returning Customer</h3>

                    <div className="flex w-[1050px]">
                        <div className="w-[760px]">
                            <h3>Email address</h3>
                            <input placeholder='company@domain.com' type="email" name="" id="" />
                        </div>
                        <div className="w-[740px]">
                            <h3>Password</h3>
                            <input placeholder='enter password' type="password" name="" id="" />
                        </div>
                    </div>
        </Container>


    )
}

export default Login