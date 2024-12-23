const baseUrl = `https://movieaddict-d6a19-default-rtdb.europe-west1.firebasedatabase.app`;

const getResentMovies = async () => {
    let response = await fetch(`${baseUrl}/movies.json`);
    let data = await response.json();

    if (data === null) {
        return [];
    }

    let resentMovies = Object.keys(data).map(id => Object.assign(data[id], { id }))

    return resentMovies.slice(-4).reverse();
}

export default getResentMovies;