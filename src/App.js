import { useContext } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { userInputs,productInputs } from './formSource';
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './style/dark.scss'
import {darkModeContext} from '../src/context/darkModeContext'


function App() {
  const {darkMode}=useContext(darkModeContext)

  return (
    <div className={darkMode? "app dark":"app"}>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route exact path='/users' element={<List />} />
      <Route exact path='/users/:userId' element={<Single />} />
      <Route exact path='/users/new' element={<New title='Add New Users' 
      inputs={userInputs}/>} />

      <Route exact path='/products' element={<List />} />
      <Route exact path='/products/:productId' element={<Single />} />
      <Route exact path='/products/new' element={<New title='Add New Product'
      inputs={productInputs} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
