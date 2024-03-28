import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { NavLink, useLoaderData } from 'react-router-dom';
const Books = () => {
    const data = useLoaderData()
   


    return (
        <div>
            <div className='lg:flex lg:mx-auto  lg:px-10 justify-between  w-svw lg:w-[1100px] lg:mt-10 lg:items-center'>
                <div className='ml-12 text-start '>
                    <p className='font-bold lg:text-4xl'>Books to freshen <br /> up your bookshelf</p>
                    <NavLink to={'/listedbooks'}><button className='btn my-14 bg-green-500 hover:bg-green-600 rounded-xl text-white font-bold' >View the List</button ></NavLink>
                </div>
                <img className='lg:w-1/2 w-[300px]' src="src/11.webp" alt="" />
            </div>
            <p className="text-3xl font-bold text-left ml-[150px] lg:ml-0 lg:ml0 lg:text-center my-20">Books</p>

            <div className="lg:grid lg:grid-cols-3 gap-4 w-full lg:w-[1150px] my-10">
                {/* books data */}

                {
                    data.map(d => <Cart datas={d}></Cart>)
                }
            </div>
        </div>
    );
};

export default Books;