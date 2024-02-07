import axios from 'axios';

const baseUrl = "https://api.themoviedb.org/3/";
const ApiKey = "ffa809b20f2dee8fa6f9ee7d0940bc47";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=ffa809b20f2dee8fa6f9ee7d0940bc47';

const getTrendingMovies = axios.get(baseUrl+"trending/all/day?api_key="+ApiKey);

const getMovieByGenereId = (id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingMovies,
    getMovieByGenereId
};

