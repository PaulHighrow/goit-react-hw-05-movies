import { Heading } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { CastList, CastPic, CastName, CastCharacter } from './Cast.styled';
import placeholder from '../../img/placeholder.jpg';
import toast, { Toaster } from 'react-hot-toast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const movieCast = await getMovieCast(id);
        setCast(movieCast);
      } catch (error) {
        console.error(error);
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <>
      <Heading as="h2">Cast</Heading>
      {isLoading ? (
        <Loader />
      ) : (
        <CastList>
          {cast.map(({ order, profile_path, name, character }) => (
            <li key={order}>
              <CastPic
                src={profile_path ? BASE_IMG_URL + profile_path : placeholder}
                alt={name}
              />
              <CastName>
                {name}
                {character && <CastCharacter>as {character}</CastCharacter>}
              </CastName>
            </li>
          ))}
        </CastList>
      )}
      <Toaster />
    </>
  );
};

export default Cast;
