import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import { loader } from './components/projectLoader.js'
import App from './App.jsx'
import NotFound from './NotFound.jsx'

function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App />}>
                <Route index element={<Home/>} />
                <Route path='/project/:idx' element={<Project/>} loader={loader} errorElement={<NotFound />} />
                <Route path='*' errorElement={<NotFound />} />
            </Route>
        )
    )
  return (
    <RouterProvider router={router} />
  )
}

export default Router