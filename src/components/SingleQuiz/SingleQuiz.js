import React from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({q}) => {
    const {question,id,correctAnswer,options} = q;
    return (
        <div className='quiz-box'>
            <p className='question'>{question}</p>
            {
                options.map(option => <div>
                    <input type="radio" id={id} name="1" value={option}/>
                    <label for="1">{option}</label>
                  </div>)
            }
            
        </div>
    );
};

export default SingleQuiz;