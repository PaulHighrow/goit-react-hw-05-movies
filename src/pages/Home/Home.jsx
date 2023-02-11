import { getTrendingMovies } from 'services/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Header } from 'components/App.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch {
        console.error(Error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div>
      <Header>Home</Header>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
