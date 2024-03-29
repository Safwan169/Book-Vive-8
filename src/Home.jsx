import React from 'react';
import Nav from './Nav';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className='lg:w-[1150px] w-svw mx-auto'>
           <Nav ></Nav>
           <div className='text-center'><Outlet></Outlet></div>
        </div>
    );
};

export default Home;