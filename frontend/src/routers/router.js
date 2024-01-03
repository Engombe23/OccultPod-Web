import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Episodes from '../components/episodes/Episodes';
import Guests from '../components/guests/Guests';
import Contact from '../pages/Contact';
import SingleEpisode from '../components/episodes/SingleEpisode';
import Listen from '../pages/Listen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/episodes',
        element: <Episodes/>
      },
      {
        path: '/guests',
        element: <Guests/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/episodes/:id',
        element: <SingleEpisode/>,
        loader: ({params}) => fetch(`http://localhost:5000/api/episodes/${params.id}`)
      },
      {
        path: '/listen',
        element: <Listen/>
      }
    ]
  }
])

export default router;