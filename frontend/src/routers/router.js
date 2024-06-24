import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Episodes from '../pages/Episodes';
import SingleEpisode from '../components/episodes/SingleEpisode';
import Dashboard from '../pages/Dashboard';
import UpdateEpisode from '../components/episodes/UpdateEpisode';
import NewEpisode from '../components/episodes/NewEpisode';

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
        path: '/episodes',
        element: <Episodes/>
      },
      {
        path: '/episodes/:id',
        element: <SingleEpisode/>,
        loader: ({params}) => fetch(`http://localhost:5000/api/episodes/${params.id}`)
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/dashboard/new',
        element: <NewEpisode/>
      },
      {
        path: '/dashboard/edit/:id',
        element: <UpdateEpisode/>
      }
    ]
  }
])

export default router;