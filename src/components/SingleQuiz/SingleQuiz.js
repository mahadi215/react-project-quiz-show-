import React, { useState } from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({q}) => {
    const {question,id,correctAnswer,options} = q;
    
    const [ans, setAns] = useState([])
    const showAns = () =>{
        // document.getElementById('hidden-ans').style.display ="block";
        // console.log(correctAnswer);
         setAns(correctAnswer)
        //  console.log(ans);
        
    }
    const check = () =>{
        
    }
    return (
        <div className='quiz-box'>
           
            <div id='hidden-ans' className=' text-white'>
                <button onClick={showAns} className='c-ans'><i class="fa-solid fa-eye"></i></button>
                <p >correct answer is: {ans}</p>
            </div>
            <h4 className='question'>{question}</h4>
            {
                options.map(option => <div className='radio-box'>
                    <input type="radio" id={id} name="1" value={option} onClick={check} />
                    <label for="1">{option}</label>
                  </div>)
            }
            
        </div>
    );
};

export default SingleQuiz;