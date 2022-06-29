
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Users from './components/Users';
import NotFound from './components/NotFound';
function App() {
  return (
  <>
  <Header/>
  <Routes>
  <Route path='*' element={<NotFound/>}/>
    <Route path='/' element={<Home/>}  />
    <Route path='/login' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/user/:id' element={<Users/>} />
    
  </Routes>
  </>
  );
}

export default App;
