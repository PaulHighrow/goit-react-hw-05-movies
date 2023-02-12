import { getTrendingMovies } from 'services/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Heading } from 'components/App.styled';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      <Heading>Trending today</Heading>
      <MoviesList movies={movies} />
      <Toaster />
    </>
  );
};

export default Home;
