import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Body from './Body.tsx'
import About from './About.tsx'
import MovieDetails from './MovieDetails.tsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/movie/:movieId",
        element:<MovieDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
