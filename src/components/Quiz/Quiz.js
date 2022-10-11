import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes);
    const {questions} = quizes.data;
    return (
        <div>
            <h1>hello</h1>
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