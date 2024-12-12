import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';;

export default function Navbar() {
    const navigate = useNavigate();

    const guestNavigation = (
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    )

    const userNavigation = (
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Welcome, Vlad</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={async e => {
                    e.preventDefault();
                    navigate('/')
                }}>Logout</Link>
            </li>
        </ul>
    )

    return (
        <div className="app-navbar">
            <header className='header'>
                <Link className="title" to="/">MOVIE ADDICT</Link>

                <nav className="navbar">
                </nav>
            </header>
        </div>
    );
}