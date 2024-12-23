import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const onLoginHandler = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return navigate('/login');
        }

        login(email, password)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                navigate('/login');
            })
    }

    return (
        <div className="login-wrapper">
            <form className="login" method="POST" onSubmit={onLoginHandler} autoComplete='off'>
                <h1 className="login-title">Sign In</h1>
                <div className="login-group">
                    <input
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="text"
                        placeholder="Email..."
                        required="{true}" />
                </div>
                <div className="login-group">
                    <input
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder='Password...'
                        required="{true}" />
                </div>
                <button className="login-btn" type="submit">Sign In</button>
            </form>
        </div>
    );
}