import React from 'react';

const St = ({d}) => {
    const {image,stationary_name,price}={d}
    return (
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <p>{stationary_name}</p>
                    <p>{price}.Tk</p>
                </div>
            </div>
        </div>
    );
};

export default St;