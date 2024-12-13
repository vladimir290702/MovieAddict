import { useState, useEffect } from 'react';
import ButtonSection from '../ButtonSection/ButtonSection';
import ResentMovies from '../ResentMovieCard/ResentMovies';
import requests from '../../services/tmdbRequests';
import './Homepage.css';
import { useAuth } from '../../contexts/authContext';


export default function Homepage() {
    const [movie, setMovie] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {

        // function for taking random movie
        async function fetchData() {
            const request = await fetch(requests.fetchPopular);
            const data = await request.json();

            let randomMovie = Math.floor(Math.random() * data.results.length);
            setMovie(data.results[randomMovie]);

            return data;
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="banner"
                style={
                    {
                        backgroundSize: "cover",
                        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )` ,
                        backgroundPosition: "center center",
                    }
                }>
                <div className="banner_contents">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                    <h1 className='banner_description'>{movie?.overview}</h1>
                </div>
            </div>
            <div className="fade_banner"></div>

            {
                currentUser
                    ? <ButtonSection />
                    : <div></div>
            }
            <ResentMovies />
        </>
    )
}