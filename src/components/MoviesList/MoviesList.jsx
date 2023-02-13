import { useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';
import {
  TrendingList,
  Poster,
  ListLink,
  Rating,
  Info,
} from './MoviesList.styled';
import placeholder from '../../img/placeholder.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendingList>
      {movies.map(({ id, title, poster_path, vote_average, release_date }) => (
        <li key={id}>
          <ListLink to={`/movies/${id}`} state={{ from: location }}>
            <Poster
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />
            <Info>
              {title} ({release_date.slice(0, 4)})
              <Rating>{vote_average ? vote_average.toFixed(1) : 'N/A'}</Rating>
            </Info>
          </ListLink>
        </li>
      ))}
    </TrendingList>
  );
};
