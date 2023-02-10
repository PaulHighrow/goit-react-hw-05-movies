import { getTrendingMovies } from 'services/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch {
        console.error(Error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
