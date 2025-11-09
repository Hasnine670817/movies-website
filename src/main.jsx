import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import MainLayouts from './Layouts/MainLayouts';
import Home from './Pages/Home';
import About from './Pages/About';
import MoviesDetails from './Components/MoviesDetails';
import AllTrendingMovies from './Movies/AllTrendingMovies';
import AllHollywoodMovies from './Movies/AllHollywoodMovies';
import AllBollywoodMovies from './Movies/AllBollywoodMovies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-trending-movies",
        element: <AllTrendingMovies></AllTrendingMovies>
      },
      {
        path: "/all-hollywood-movies",
        element: <AllHollywoodMovies></AllHollywoodMovies>
      },
      {
        path: "/all-bollywood-movies",
        element: <AllBollywoodMovies></AllBollywoodMovies>
      },
      {
        path: "/movie/:id",
        element: <MoviesDetails></MoviesDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
