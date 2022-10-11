import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
  //  const startQuiz = (id) =>{
  //   console.log(id)
  //   fetch('https://openapi.programming-hero.com/api/quiz/${}')
    

  //  } 
    // console.log(topic);
    const {id,name,logo,total} = topic;
    return (
        
        <div className="card col-lg-4 col-md-6 col-sm-12 m-2">
             <img src={logo} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">Total Quiz: {total}</p>
             {/* <button onClick={() => {startQuiz(id)}} className=' card-btn'>start</button> */}
             <Link to={`/quiz/${id}`} className=' card-btn'>Start</Link>
          </div>
        </div>
    );
};

export default Topic;