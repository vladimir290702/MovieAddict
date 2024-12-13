import './ButtonSection.css';
import { Link } from 'react-router-dom';

export default function ButtonSection() {
    return (
        <div className="section_container">
            <div id="wrap">
                <div>
                    <Link to="/add-movie" className="wrap_btn">Add Movie</Link>
                </div>
                <div>
                    <Link to="/all" className="wrap_btn">Show All Movies</Link>
                </div>
            </div>
            <div className="delimeter"></div>
        </div>
    )
}
