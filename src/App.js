import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from './contexts/authContext';
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddMovie from "./components/AddMovie/AddMovie";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Profile from "./components/Profile/Profile";
import AllMovie from './components/AllNetflixMovie/AllMovies';
import NetflixMovieDetails from './components/NetflixMovieDetails/NetflixMovieDetails';

function App() {
  
  return (
    <AuthContextProvider>
      <Navbar />  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path='/details/:movieId' element={<MovieDetails />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/all' element={<AllMovie />} />
          <Route path='/details/netflix/:id/' element={<NetflixMovieDetails />} />

        </Routes>
        <Footer />

    </AuthContextProvider>
  );


}

export default App;
