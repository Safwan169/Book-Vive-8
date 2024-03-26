import React from 'react';
import Nav from './Nav';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className='w-[1150px] mx-auto'>
           <Nav ></Nav>
           <div className='text-center'><Outlet></Outlet></div>
        </div>
    );
};

export default Home;