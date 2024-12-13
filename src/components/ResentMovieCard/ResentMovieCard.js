import { Link } from 'react-router-dom';
import './ResentMovies.css'

export default function ResentMovieCard({resentMovies}) {
    
    return (
        <div key={resentMovies.movieId}>
            <img src={`${resentMovies.movieImg}`} alt={resentMovies.movieId} />
            <div className="resent_details">
                <Link to={`/details/${resentMovies.movieId}`} className="resent_details_btn">Details</Link>
            </div>
        </div>
    )
}
