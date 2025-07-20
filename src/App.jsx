import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addcard from './Components/Add-card';
import Cardpage from './Components/Card-page';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="container-fluid cus_body">
      <div className="row">

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Addcard />} />
              <Route path='/about' element={<About />} />
              <Route path='/creat-post' element={<Addcard />} />
              <Route path='/card-page' element={<Cardpage />} />
            </Route>
          </Routes>
   
      </div>
    </div>
  );
}

export default App;
