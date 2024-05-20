import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ArrivalsItem from '../ArrivalsItem.jsx';


const Post = ({allData}) => {
    return (
        <>
            {allData.map((item) => (
                <div className="w-[32%] flex justify-between">
                    <Link to={`/Products/${item.id}`}>
                        <ArrivalsItem item={item} />
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Post