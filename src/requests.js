const API_KEY = import.meta.env.VITE_MOVIE_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
	requestTrendingMovies: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	requestNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
	requestTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	requestActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	requestComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	requestScienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
	requestMysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
	requestTVMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
	requestHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
	requestRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
	requestAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
	requestTopRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
	requestPopularSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
	requestComedySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
	requestMysterySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
	requestAnimationSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`,
	requestDramaSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`,
	requestActionSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
	requestCrimeSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
	requestRealitySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764`,
};

export default requests;
