import requests from './tmdbRequests'
const tmdbUrl = 'https://image.tmdb.org/t/p/w500'

const getResentMovies = async () => {
    let response = await fetch(`${requests.fetchLatest}`);
    let data = await response.json();
    let movies = []
    
    if (data === null) {
        return [];
    }

    data.results.forEach(movie => {
        let movieInfo = {
            movieImg: `${tmdbUrl}${movie.poster_path}`,
            movieName: movie.title,
            movieId: movie.id
        }
        
       movies.push(movieInfo)
    })

    return movies.slice(-4).reverse();
}

export default getResentMovies;