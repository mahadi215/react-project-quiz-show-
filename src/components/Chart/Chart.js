import React from 'react';
import './Chart.css'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {
    const a = useLoaderData();
    
    const data = a.data;
    // console.log(data);

    return (
        <div className='chart-box'>
            <h2>chart</h2>
            
            
             <LineChart className='chart' width={400} height={300} data={data}>
               <Line type="monotone" dataKey="total" stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" />
               <XAxis dataKey="name" />
               <Tooltip/>
               <YAxis />
             </LineChart>

        </div>
    );
};

export default Chart;