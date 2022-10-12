import React from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({q}) => {
    const {question,id,correctAnswer,options} = q;
    return (
        <div className='quiz-box'>
            <div>
                <button className='c-ans'><i class="fa-solid fa-eye"></i></button>
            </div>
            <p className='question'>{question}</p>
            {
                options.map(option => <div className='radio-box'>
                    <input type="radio" id={id} name="1" value={option}/>
                    <label for="1">{option}</label>
                  </div>)
            }
            
        </div>
    );
};

export default SingleQuiz;