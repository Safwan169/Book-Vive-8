
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Local1 } from './Local';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';




const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];





const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Read = () => {

    const data = useLoaderData()
    const [Data1, setData1] = useState([])
    useEffect(() => {
        const get1 = Local1()

        if (data.length > 0) {
            const applid1 = data.filter(data => get1.includes(data.bookId))
            setData1(applid1)
        }
    }, [])

    return (
        <div className='items-center  flex justify-center h-svh'>
            <BarChart
                width={1000}
                height={400}
                data={Data1}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='bookName' />
                <YAxis />
                <Bar dataKey='totalPages' fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {Data1.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>

        </div>
    );
};

export default Read;