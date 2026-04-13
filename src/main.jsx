import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import router from './router/router.jsx'
import MyContext from './MyContext/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </StrictMode>,
)
