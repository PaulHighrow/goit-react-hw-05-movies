import { Header } from 'components/App.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieCast = await getMovieCast(id);
        setCast(movieCast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <>
      <Header as="h2">Cast</Header>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <h3>{person.name}</h3>
            <img src={BASE_IMG_URL + person.profile_path} alt={person.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
