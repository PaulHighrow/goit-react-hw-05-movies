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

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieDetails(id).then(setDetails);
  }, [id]);

  if (!details) {
    return null;
  }
  //   console.log(details);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
      }}
    >
      <h1>{details.title}</h1>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <img src={BASE_IMG_URL + details.poster_path} alt={details.title} />
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
