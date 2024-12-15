import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container" id="buttons">
                <div className="social-media">
                    <a href="https://facebook.com" className="fa fa-facebook">
                    <img src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" className="fa fa-twitter">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" className="fa fa-instagram">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Facebook" />
                    </a>
                    <a href="https://youtube.com" className="fa fa-youtube">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Facebook" />
                    </a>
                </div>
            </div>
            <div className="container" id="copy">
                <div className="copy">
                    <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                        <a href="/netflix">Netflix</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}