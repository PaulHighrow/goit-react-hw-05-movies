import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <img src={BASE_IMG_URL + person.profile_path} alt={person.name} />
            <p>{person.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
