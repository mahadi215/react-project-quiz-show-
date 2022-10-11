import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h5>Wellcome to the Quiz Show App. <br/>
                    This is a educational webapp about programming quiz.
                    Here is only 4 Topics.React, Javascript,CSS and Git, in future we will add more topics.
                </h5>
            </div>
            <img src="https://media.istockphoto.com/photos/abstract-modern-background-in-blue-and-white-contemporary-triangle-picture-id1364883668?b=1&k=20&m=1364883668&s=170667a&w=0&h=03YYDdi91DNH6ri9zDgn25atlF88-10phN-aYN7K8VM=" alt="" />
        </div>
    );
};

export default Banner;