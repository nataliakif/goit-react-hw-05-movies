const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '03b99d578651e9a3ce5c6cc1a058aad2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  console.log(response);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

function getBySearchQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
}
function getTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
}
function getMovieDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
}
function getMovieCredits(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
}
function getMovieReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
}

export {
  getBySearchQuery,
  getTrending,
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
};
