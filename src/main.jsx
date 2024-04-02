// import react library
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import app component
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx';
import Athletics from './pages/Athletics.jsx';
import Resume from './pages/Resume.jsx';
import Track from './pages/Track.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: "athletics",
        element: <Athletics />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "track",
        element: <Track />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}/>

)
