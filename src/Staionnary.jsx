import React from 'react';
import { useLoaderData } from 'react-router-dom';
import St from './St';

const Staionnary = () => {
    const data=useLoaderData
    return (
        <div>
            {
                data.map((d)=><St d={d}></St>)
            }
        </div>
    );
};

export default Staionnary;