import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom';
import Navigate from './components/Navigate';

function App() {

  return (
    <div className="App">
      <Navigate/>
      <Outlet/>
    </div> 
  );
}

export default App;