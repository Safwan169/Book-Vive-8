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
            <div  className="  lg:px-8">
            <div className="card card-compact border1  bg-base-100 shadow-xl my-8 h-[400px] ">
                <figure className='  mb-8    justify-start'><img className=" w-[200px] h-[200px]  lg:w-[230px]  ml-0 lg:h-[200px] bg-cover rounded-xl mt-6" src={image} alt="image" /></figure>
                <div className="card-body  text-center">
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