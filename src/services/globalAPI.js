import axios from 'axios';

const baseUrl = "https://api.themoviedb.org/3/movie/";
const ApiKey = "ffa809b20f2dee8fa6f9ee7d0940bc47";
const ApiAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmE4MDliMjBmMmRlZThmYTZmOWVlN2QwOTQwYmM0NyIsInN1YiI6IjY1YzBiZGE2YmE0ODAyMDE4MjZlNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c18_jn9y3YK0O6sc_x9mz8lNH5bSBCoEHIW80frRkPs";

const getTrendingMovies = axios.get(baseUrl+"now_playing?api_key="+ApiKey);

export default {
    getTrendingMovies
};

