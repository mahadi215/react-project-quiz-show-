import React from 'react';

const SingleQuiz = ({q}) => {
    const {question,id,correctAnswer,options} = q;
    return (
        <div className='quiz-box'>
            <p>{question}</p>
            
        </div>
    );
};

export default SingleQuiz;