import './AddMovie.css';
import { useAuth } from '../../contexts/authContext';
import addMovie from '../../services/addMovie';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    window.scrollTo(0, 0);
    
    const onCreateMovie = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('title');
        let rating = formData.get('rating');
        let genre = formData.get('genre');
        let runtime = formData.get('runtime');
        let overview = formData.get('overview');
        let imageUrl = formData.get('imageUrl');
        let budget = formData.get('budget');

        let movieData = {
            creator: currentUser, name, rating, genre, runtime, overview, imageUrl, budget
        }

        addMovie(movieData)
            .then(result => {
                navigate('/');
            })
            .catch(e => {
                navigate('/');
            })
    }

    return (
        <div className='add_movie_wrapper'>
            <h1 className='add_form_title'>Add Movie</h1>
            <form action="" id="add_movie_form" className="add_movie_form" onSubmit={onCreateMovie}>
                <div className="add_left_movie_section">
                    <div>
                        <h1 >Movie Title</h1>
                        <input
                            type="text"
                            className="add_form-control"
                            placeholder="Title..."
                            name="title"
                        />
                    </div>
                    <div>
                        <h1>Movie Rating</h1>
                        <input
                            type="text"
                            className="add_form-control"
                            placeholder="Rating..."
                            name="rating"
                        />
                    </div>
                    <div>
                        <h1>Movie Genre</h1>
                        <input
                            type="text"
                            className="add_form-control"
                            placeholder="Genre..."
                            name="genre"
                        />
                    </div>
                    <div>
                        <h1 >Movie Runtime</h1>
                        <input
                            type="text"
                            className="add_form-control"
                            placeholder="Runtime..."
                            name="runtime"
                        />
                    </div>
                </div>

                <div className="add_right_movie_section">
                    <div>
                        <h1>Movie Overview</h1>
                        <input
                            type="text"
                            className="add_form-control_special"
                            placeholder="Overview..."
                            name="overview"
                        />
                    </div>
                    <div>
                        <h1 >Movie Image</h1>
                        <input
                            type="url"
                            className="add_form-control"
                            placeholder="ImageUrl..."
                            name="imageUrl"
                        />
                    </div>
                    <div>
                        <h1>Movie Budget</h1>
                        <input
                            type="number"
                            className="add_form-control"
                            placeholder="Budget..."
                            name="budget"
                        />
                    </div>
                </div>
                <button className='add_btn_submit'>Submit</button>
            </form>
        </div>
    )
}