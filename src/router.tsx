import { createBrowserRouter } from 'react-router-dom'
import { Blog } from './view/pages/Blog'
import { Home } from './view/pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts/:id',
    element: <Blog />,
  },
])
