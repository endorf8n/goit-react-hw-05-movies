import axios from 'axios';

// const API_KEY = '2ab057e37632a319c6bf25dc9b438352';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWIwNTdlMzc2MzJhMzE5YzZiZjI1ZGM5YjQzODM1MiIsInN1YiI6IjY0YTQzYjBkMTEzODZjMDExYzNiNmNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QEBANYEMuDbGQ9lrMDDAfxfmCJPA7p9-xGcIcjlQ8fk';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: 'application/json',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day?language=en-US');
  return data;
};

export const getFilteredMovies = async query => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};
