import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div className='container'>
            <div className='row'>
             {
                    topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
                }
            </div>
               
        </div>  
    );
};

export default Topics;