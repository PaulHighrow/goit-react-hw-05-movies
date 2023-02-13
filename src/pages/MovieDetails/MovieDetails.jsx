import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { Heading } from 'components/App.styled';
import {
  ButtonStyledLink,
  Rating,
} from 'components/MoviesList/MoviesList.styled';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import {
  Details,
  DetailsButtons,
  DetailsInfo,
  DetailsText,
  GoBack,
  GoBackIcon,
  PosterImg,
  Highlight,
} from './MovieDetails.styled';
import placeholder from '../../img/placeholder.jpg';

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

  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
    status,
    runtime,
    budget,
    revenue,
  } = details;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>{title}</Heading>
          <Details>
            <GoBack type="button" onClick={handleGoBack}>
              <GoBackIcon />
              Go back
            </GoBack>

            <PosterImg
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />

            <DetailsInfo>
              <ul>
                <li>
                  <DetailsText>
                    <Highlight>Overview:</Highlight> {overview}
                  </DetailsText>
                </li>
                <li>
                  <DetailsText>
                    <Highlight>Status:</Highlight> {status}
                  </DetailsText>
                  <DetailsText>
                    <Highlight>Runtime:</Highlight> {runtime} minutes
                  </DetailsText>
                  {!!budget && (
                    <DetailsText>
                      <Highlight>Budget:</Highlight>{' '}
                      {budget
                        .toString()
                        .split('')
                        .map((symbol, i, a) =>
                          !((a.length - (i + 1)) % 3) && i + 1 !== a.length
                            ? symbol + ','
                            : symbol
                        )
                        .join('')}
                      $
                    </DetailsText>
                  )}
                  {!!revenue && (
                    <DetailsText>
                      <Highlight>Revenue:</Highlight>{' '}
                      {revenue
                        .toString()
                        .split('')
                        .map((symbol, i, a) =>
                          !((a.length - (i + 1)) % 3) && i + 1 !== a.length
                            ? symbol + ','
                            : symbol
                        )
                        .join('')}
                      $
                    </DetailsText>
                  )}
                  <DetailsText>
                    <Highlight>Release date:</Highlight>{' '}
                    {new Date(release_date).toLocaleString().slice(0, 10)}
                  </DetailsText>
                </li>
                <li>
                  <DetailsText>
                    <Highlight>Rating:</Highlight>{' '}
                    <Rating>{vote_average}</Rating> based on {vote_count} votes
                  </DetailsText>
                </li>
              </ul>

              <DetailsButtons>
                <ButtonStyledLink
                  to="cast"
                  state={{ from: location.state.from }}
                >
                  Cast
                </ButtonStyledLink>
                <ButtonStyledLink
                  to="reviews"
                  state={{ from: location.state.from }}
                >
                  Reviews
                </ButtonStyledLink>
              </DetailsButtons>
            </DetailsInfo>
          </Details>
        </>
      )}
      <Outlet />
      <Toaster />
    </>
  );
};

export default MovieDetails;
