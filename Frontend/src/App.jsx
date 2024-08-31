import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import Layout from './component/Layout';
import Cart from './component/Cart';
import Course from './component/Course';
import Admin from './component/Admin';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import Java from './component/static/Java';
import Python from './component/static/Python';
import CPP from './component/static/CPP';
import DSA from './component/static/DSA';
import TestToast from './component/Testtoast';

function App() {

  const [userid , setUserid] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log(decodedToken);
        setUserid(decodedToken.userId);
        
        setIsAuthenticated(true);
        if (decodedToken.isAdmin) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      toast.success("Logout successful!");
      setIsAdmin(false);
      setIsAuthenticated(false);
    } catch (error) {
      console.log("Error in hadleLogour in app.jsx : ", error);
      
    }
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout} userid = {userid}/>}>
          <Route path='' element={<Home userid = {userid} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/course' element={<Course />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/java' element={<Java />} />
          <Route path='/python' element={<Python />} />
          <Route path='/cpp' element={<CPP />} />
          <Route path='/dsa' element={<DSA />} />
          <Route path='/test' element={<TestToast />} />

          <Route
            path='/admin'
            element={isAuthenticated && isAdmin ? <Admin /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
