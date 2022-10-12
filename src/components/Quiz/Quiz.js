import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes);
    const {questions,name} = quizes.data;
    return (
        <div>
             <h2 className='text-center'> Quiz of {name}</h2>
            {
                questions.map(q => <SingleQuiz
                q={q}
                key={q.id}></SingleQuiz>            
                )
            }
        </div>
    );
};

export default Quiz;