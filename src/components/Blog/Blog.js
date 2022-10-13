import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>what is the perpouse of react router</h2>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
        <br />
        <h2>how doer context api works</h2>
        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        <br />
        <h2> What is useRep Hook</h2>
        <p> The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
            It can be used to access a DOM element directly.</p>
        </div>


    );
};

export default Blog;