import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrivalsItem from '../ArrivalsItem.jsx';


const Post = ({ allData, categorySearchfilter, multiList }) => {
    console.log(multiList);

    let [filterShow, setFilterShow] = useState([])
    let [catShow, setCatShow] = useState(true)

    useEffect(() => {
        let filterAmi = categorySearchfilter.slice(0, 5)
        setFilterShow(filterAmi)
    }, [categorySearchfilter])

    let handleShow = () => {
        setFilterShow(categorySearchfilter)
        setCatShow(false)
    }
    let handleHide = () => {
        let filterAmi = categorySearchfilter.slice(0, 5)
        setFilterShow(filterAmi)
        setCatShow(true)


    }
    return (
        <>
            {categorySearchfilter.length > 0 ?
                <div className="">
                    <div className="flex flex-wrap">
                        {
                            filterShow.map((item) => (
                                <div className="w-[32%] pb-6 flex justify-between">
                                    <Link to={`/Products/${item.id}`}>
                                        <ArrivalsItem item={item} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    {catShow ? categorySearchfilter.length > 5 &&
                        <button onClick={(handleShow)} className='py-2 px-7 border border-black mt-3 hover:bg-black hover:text-white duration-300'>Show</button>
                        :
                        <button onClick={(handleHide)} className='py-2 px-7 border border-black mt-3 hover:bg-black hover:text-white duration-300'>Hide</button>
                    }
                </div>
                :
                <div className={`${multiList == "active" ? "" : "flex justify-between flex-wrap" }`}>
                    {allData.map((item) => (
                        <div className="lg:w-[32%] w-full flex justify-between">
                            <Link to={`/Products/${item.id}`}>
                                <ArrivalsItem item={item} />
                            </Link>
                        </div>
                    ))}
                </div>

            }
        </>
    )
}

export default Post