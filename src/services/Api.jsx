import axios from 'axios';

const key = '04e81f6e5279def5b1a55a2f401d6ead';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${key}`);
  return response.data;
};

export const getMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${key}&query=${query}&page=1`
  );
  return response.data;
};

export const getMoviById = async Id => {
  const response = await axios.get(`/movie/${Id}?api_key=${key}`);
  return response.data;
};

export const getCastById = async Id => {
  const response = await axios.get(`/movie/${Id}/credits?api_key=${key}`);
  return response.data;
};

export const getReviewsById = async Id => {
  const response = await axios.get(`/movie/${Id}/reviews?api_key=${key}`);
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=04e81f6e5279def5b1a55a2f401d6ead

// https://api.themoviedb.org/3/movie/550?api_key=04e81f6e5279def5b1a55a2f401d6ead

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
