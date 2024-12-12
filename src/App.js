import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from './contexts/authContext';
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


function App() {
  
  return (
    <AuthContextProvider>
      <Navbar />  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>

        <Footer />

    </AuthContextProvider>
  );


}

export default App;
