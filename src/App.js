
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main/Main';

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
          element:<Home></Home>
        },
        
        {
          path:'/topics',
          element:<Topics></Topics>
        },
        {
          path:'/chart',
          element:<Chart></Chart>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        
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
