import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



const Faccordian = () => {
    let [show, setShow] = useState(false)
    return (
        <>
            <div className="w-[50%] py-[40px]">
                <div onClick={()=> setShow(!show)} className="flex justify-between">
                    <h2 className='font-bold'>FEATURES  & DETAILS</h2>
                    
                    {show == true ? <RxCross2/> :  <FaPlus /> }
                </div>

                <div className="mt-[10px]">
                    {show &&
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    }

                </div>
            </div>
        </>
    )
}

export default Faccordian