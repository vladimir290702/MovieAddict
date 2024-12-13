const baseUrl = `https://movieaddict-d6a19-default-rtdb.europe-west1.firebasedatabase.app`;

const getUserMovies = async (email) => {
    let response = await fetch(`${baseUrl}/movies.json`);
    let data = await response.json();

    let allUserMovies = Object.keys(data).map(id => Object.assign(data[id], { id })).filter(movie => movie.creator === email);

    return allUserMovies;
}

export default getUserMovies;