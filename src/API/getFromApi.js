const url = 'https://api.themoviedb.org/3';
const keyAPI = 'b21058f72758fad4203348f97b82c407';
const imgUrl = 'https://image.tmdb.org/t/p/original';

const fetchTopDayMovies = ()=>{
    return fetch(`${url}/trending/movie/day?api_key=${keyAPI}`)
    .then(res => res.json());   
}

const fetchMovieById = movieId =>{
    return fetch(`${url}/movie/${movieId}?api_key=${keyAPI}&language=en-US`)
    .then(res => res.json()); 
}

const fetchMovieCast = movieId =>{
    return fetch(`${url}/movie/${movieId}/credits?api_key=${keyAPI}`)
    .then(res => res.json()); 
}

const fetchMovieReview = movieId =>{
    return fetch(`${url}/movie/${movieId}/reviews?api_key=${keyAPI}&language=en-US&page=1`)
    .then(res => res.json()); 
}

const fetchMovieBySearch = searchQuery =>{
    return fetch(`${url}/search/movie?api_key=${keyAPI}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    .then(res => res.json()); 
}

export default {fetchTopDayMovies, fetchMovieById, fetchMovieCast, fetchMovieReview, fetchMovieBySearch, imgUrl};