import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    // console.log(topic);
    const {name,logo,id,total} = topic;
    return (
        
        <div className="card col-lg-4 col-md-6 col-sm-12 m-2">
             <img src={logo} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">Total Quiz: {total}</p>
             <button className='btn card-btn'>start</button>
          </div>
        </div>
    );
};

export default Topic;