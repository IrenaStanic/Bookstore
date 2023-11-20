import './App.css';
import Home from "./pages/Home";
import Header from './components/Header';
import Cart from './components/Cart';
import Login from './pages/Login';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagination from './components/Pagination';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './store/reducer/authSlice';

function App() {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    
      <BrowserRouter>
       <Header></Header>
       <ToastContainer/>
       
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Pagination></Pagination>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/cart' element={<Cart></Cart>}></Route>
         <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/register' element={<Register></Register>}></Route> 
        <Route path="*" element={<NotFound />} />
        </Routes>
    
      </BrowserRouter>
    
  );
}

export default App;
