import React from 'react';
import { useLoaderData } from 'react-router-dom';
import St from './St';

const Staionnary = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div className='text-left  w-full lg:grid lg:grid-cols-3 mt-20'>
            {
                data.map((d)=><St d={d}></St>)
            }
        </div>
    );
};

export default Staionnary;