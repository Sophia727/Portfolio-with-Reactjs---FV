import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
// import AboutMe from './pages/About'; 
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Layout from './Layout';
// import Home from './pages/Home';
import App from './App';
import Home2 from './pages/Home2';

const router =createBrowserRouter([
  {
    path:"",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path:"",
        element: <Home2/>,
      },
      // // {
      // //   path:"#aboutme",
      // //   element: <AboutMe/>,
      // // },
      // {
      //   path:"#projects",
      //   element: <Projects/>,
      // },
      {
        path:"/#contact",
        element: <Contact/>,
      },

    ]
  }
],
{basename: "/portfolio"}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  <App/>
  </React.StrictMode>
);
