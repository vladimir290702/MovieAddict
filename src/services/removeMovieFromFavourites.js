const baseUrl = `https://movieaddict-d6a19-default-rtdb.europe-west1.firebasedatabase.app`;

const removeMovieFromFavourites = async (id, currentUser) => {

    let res = await fetch(`${baseUrl}/movies/${id}/favouriteTo.json`);
    let data = await res.json();

    Object.filter = (obj, predicate) =>
        Object.keys(obj)
            .filter(key => predicate(obj[key]))
            .reduce((res, key) => (res[key] = obj[key], res), {});


    let filteredArray = Object.filter(data, user => user !== currentUser);

    let response = await fetch(`${baseUrl}/movies/${id}/favouriteTo.json`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(filteredArray),
    });

    return response;
}

export default removeMovieFromFavourites;
