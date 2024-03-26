import React from 'react';
import { Link, NavLink, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div className='flex-col h-svh  font-bold  flex justify-center gap-5 text-center text-3xl '>
            Oops!!
            <Link to={-1}><button className=' border border-blue-400 rounded-2xl px-4 text-xl font-medium btn'>Go Back</button></Link>
            <p className=''>{error.status}</p>
            <p>{error.statusText}</p>
        </div>
    );
};

export default Error;