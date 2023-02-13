import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiService';
import { Loader } from 'components/Loader/Loader';
import { Heading } from 'components/App.styled';
import toast, { Toaster } from 'react-hot-toast';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }

    const fetchMoviesByQuery = async () => {
      try {
        const moviesByQuery = await getMoviesByQuery(
          searchQuery.trim().toLowerCase()
        );
        if (!moviesByQuery.length) {
          throw new Error('Bad Query');
        }
        setMovies(moviesByQuery);
      } catch (error) {
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
        setQuery(searchQuery.trim().toLowerCase());
      }
    };

    fetchMoviesByQuery();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!query) {
      toast.error(`Please enter what you're looking for first!`);
      return;
    }

    if (
      searchParams.get('query')?.trim().toLowerCase() ===
      query.trim().toLowerCase()
    ) {
      toast.error(
        `You already have results for "${query.trim()}" on your screen, please try something else!`
      );
      return;
    }
    setIsLoading(true);
    setSearchParams({ query });
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <Heading>Movies</Heading>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Find a movie"
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      <Toaster />
    </>
  );
};

export default Movies;
