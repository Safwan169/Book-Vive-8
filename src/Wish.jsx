import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Wish = ({ d }) => {
    return (
        <div>
            <div className="hero my-7 bg-base-200  rounded-lg  shadow-2xl">
                <div className="hero-content flex-col  px-0 mx-0 gap-14 lg:flex-row">
                    <img src={d.image} className="w-[300px]  " />
                    <div className=' '>
                        <div className="text-left 1">
                            <h1 className="text-3xl font-bold">{d.bookName}</h1>
                            <p className="py-6">By :{d.author}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">  <p className="font-bold"><span>Tag :</span> <span className='text-green-400 font-semibold mx-4'>#{d.tags[0]}</span><span className='text-green-400 font-semibold'>#{d.tags[1]}</span></p>
                            <p className='text-gray-500 flex lg:mb-3 items-center'> <CiLocationOn className='text-black mr-2' />  <p className='mr-2 text-left '> Year of Publishing:</p><span className='font-semibold'>{d.yearOfPublishing}</span></p>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:gap-10 lg:items-center'>
                            <p className='text-gray-500 flex  items-center my-2 '><IoPeople className='text-gray-400 mr-2' /><p className='mr-2 text-left '>Publisher:</p><span className=''>{d.publisher}</span></p>
                            <p className='text-gray-500 flex items-start  lg:items-center'><FaFile className='text-gray-400 mr-2' /><p className='mr-2 text-left'>  Pages:</p><span className=' '>{d.totalPages}</span></p>

                        </div>
                        <div className="flex flex-col lg:flex-row gap-6 mt-4">
                            <p className="text-blue-400 rounded-2xl  hover:bg-blue-100 btn px-2 -0  bg-blue-100">category : {d.category[1]}</p>
                            <p className='text-yellow-500 flex rounded-2xl  hover:bg-yellow-100  btn px-4 -0  bg-yellow-100 '><p className='mr-2 text-left '>Rating:</p><span className=''>{d.rating}</span></p>
                            <NavLink to={`/details/${d.bookId}`}><button className='btn text-white hover:bg-green-600 bg-green-500 rounded-2xl px-6'>View Details</button></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wish;