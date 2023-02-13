import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { Heading } from 'components/App.styled';
import { StyledLink } from 'components/MoviesList/MoviesList.styled';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setDetails(movieDetails);
      } catch (error) {
        console.error(error);
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (!details) {
    return null;
  }

  const { title, poster_path, overview, vote_average, vote_count } = details;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading>{title}</Heading>
          <button type="button" onClick={handleGoBack}>
            Go back
          </button>

          <img src={BASE_IMG_URL + poster_path} alt={title} />
          {/* <img src={BACK_IMG_URL + backdrop_path} alt={title} /> */}

          <p>Overview: {overview}</p>
          <p>
            Rating: {vote_average} based on {vote_count} votes
          </p>

          <StyledLink to="cast" state={{ from: location.state.from }}>
            Cast
          </StyledLink>
          <StyledLink to="reviews" state={{ from: location.state.from }}>
            Reviews
          </StyledLink>
        </div>
      )}
      <Outlet />
      <Toaster />
    </>
  );
};

export default MovieDetails;
