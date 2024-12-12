import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from './contexts/authContext';
import Footer from "./components/Footer/Footer";


function App() {
  
  return (
    <AuthContextProvider>
      <Navbar />  
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>

        <Footer />

    </AuthContextProvider>
  );


}

export default App;
