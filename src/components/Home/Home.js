import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';
import './Home.css'
const Home = () => {
    const topics = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <h3>home</h3>
            <div className='container '>
                <div className='row m-auto'>
               {
                topics.data.map(topic => <Topic
                topic={topic}
                key={topic.id}></Topic>)
               }
               </div>
            </div>

        </div>
    );
};

export default Home;