
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Topic from './components/Topic/Topic';
import Main from './Layout/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        
        {
          path:'/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path: '/quiz/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        {
          path:'/chart',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Chart></Chart>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'*',
          element: <Error></Error>
        }
        
      ]
    }
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
