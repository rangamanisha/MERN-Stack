import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import { Children } from 'react';
import Layout from './Layout';

  const routes = [{
    path: '/',
    element: <Layout/>,
    children: [{
      path: '/',
      element : <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage/>
      },
      {
        path: '/articles',
        element: <ArticleListPage/>
      },
      {
        path: '/articles/:name', /* : we can see the value */
        element: <ArticlePage/>
      }
    ]
  }]



const router = createBrowserRouter(routes);
function App() {
// To work on router, first install router using  npm install react-router-dom@6.4
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
