import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MembersPage } from './pages/members-page/MembersPage.jsx'
import { HomePage } from './pages/home-page/HomePage.jsx'
import { MemberDetailsPage } from './pages/members-page/MemberDetailsPage.jsx'
import { ErrorPage } from './pages/error-page/ErrorPage.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path:"/",element : <HomePage />},
      {path:"/members", element : <MembersPage />},
      {path:"/members/:id", element : <MemberDetailsPage />},
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routes} />
  </React.StrictMode>
);
