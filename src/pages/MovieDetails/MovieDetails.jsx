import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { Header } from 'components/App.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setDetails(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!details) {
    return null;
  }

  return (
    <>
      <div>
        <Header>{details.title}</Header>
        <button type="button" onClick={handleGoBack}>
          Go back
        </button>
        <img src={BASE_IMG_URL + details.poster_path} alt={details.title} />
      </div>
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
