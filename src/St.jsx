import React from 'react';

const St = ({d}) => {
    console.log(d)
    const {image,stationary_name,price}=d
    return (
        
            // <div className=' border '>
            //     <img className='w-[200px] bg-cover  border' src={image}alt="" />
            //     <div className='border '>
            //         <p>{stationary_name}</p>
            //         <p>{price}.Tk</p>
            //     </div>
            // </div>
            <div  className=" shadow-2xl px-8">
            <div className="card card-compact  bg-base-100 shadow-xl h-[400px] ">
                <figure><img className="w-[230px] h-[200px] bg-cover rounded-xl mt-6" src={image} alt="image" /></figure>
                <div className="card-body">
                    <div>
                    <p className="text-2xl font-bold   h-[50px] ">{stationary_name}</p>
                    </div>
                    <div className="font-semibold  text-gray-500     ">
                        <p className='font-bold text-2xl text-red-600'>{price}.Tk</p>
                    </div>
                    <div className="font-semibold  text-gray-500     ">
                        <p className='font-bold text-xl bg-purple-400 mt-4 text-white btn rounded-2xl'>Buy Now</p>
                    </div>
                </div>
            </div>
        </div>

       
    );
};

export default St;