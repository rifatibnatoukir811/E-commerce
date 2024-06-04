import React, { useContext } from 'react';
import Container from './Container';
import { apiData } from './ContextApi';
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ArrivalsItem from './ArrivalsItem.jsx';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute right-[-30px] top-[35%]' onClick={onClick} ><BsArrowRight className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute left-[-30px] top-[35%] z-50' onClick={onClick} ><BsArrowLeft className='inline-block' /></div>
    );
}


const Newarrivals = () => {
    let data = useContext(apiData)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Container>
                <h2 className='text-[#262626] font-sans text-[36px] font-bold'>New Arrivals</h2>
                <Slider {...settings}>
                    {data.map((item) => (
                        <Link to="/Products"><ArrivalsItem item={item} /></Link>
                    ))}
                </Slider>
            </Container></>

    )
}

export default Newarrivals