import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentpage, prev, next }) => {
    return (
        <>
            <nav className='py-4' aria-label="Page navigation example">
                <ul className="inline-flex text-sm">
                    {pageNumber.length > 0 &&
                        <li onClick={prev}>
                            <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Previous
                            </a>
                        </li>
                    }
                    {pageNumber.map((item, i) => (
                        <li onClick={() => paginate(item)} className={currentpage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 bg-black cursor-pointer" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 bg-white cursor-pointer"}>
                            {item + 1}
                        </li>
                    ))}

                    {pageNumber.length > 0 &&
                        <li onClick={next}>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </>

    )
}

export default PaginationArea