import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//   },
// ])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
