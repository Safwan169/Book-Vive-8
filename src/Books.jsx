import React from 'react';
import Cart from './Cart';
import { NavLink, useLoaderData } from 'react-router-dom';
const Books = () => {
    const data = useLoaderData()

    return (
        <div>
            <div className='flex mx-auto  px-10 justify-between items-center'>
                <div className='ml-12 text-start '>
                    <p className='font-bold text-4xl'>Books to freshen <br /> up your bookshelf</p>
                    <NavLink to={'/listedbooks'}><button className='btn my-9 bg-green-500 hover:bg-green-600 rounded-xl text-white font-bold' >View the List</button ></NavLink>
                </div>
                <img className='w-1/2' src="src/11.webp" alt="" />
            </div>
            <p className="text-3xl font-bold text-center my-7">Books</p>

            <div className="grid grid-cols-3 gap-4  my-10">
                {/* books data */}

                {
                    data.map(d => <Cart datas={d}></Cart>)
                }
            </div>
        </div>
    );
};

export default Books;