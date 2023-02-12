import { Heading } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import {
  ReviewList,
  Review,
  Author,
  About,
  Avatar,
  Name,
  ReviewDate,
  Text,
} from './Reviews.styled';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <>
      <Heading as="h2">Reviews</Heading>
      {isLoading ? (
        <Loader />
      ) : !!reviews.length ? (
        <ReviewList>
          {reviews.map(
            ({
              id,
              author,
              content,
              created_at,
              author_details: { avatar_path },
            }) => {
              if (!avatar_path) {
                avatar_path =
                  '/https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg';
              }

              return (
                <Review key={id}>
                  <Author>
                    <Avatar
                      src={
                        avatar_path.includes('https')
                          ? avatar_path.slice(1)
                          : BASE_IMG_URL + avatar_path
                      }
                      alt={`${author}'s avatar`}
                    />
                    <About>
                      <Name>{author}</Name>
                      <ReviewDate>
                        {new Date(created_at).toLocaleString()}
                      </ReviewDate>
                    </About>
                  </Author>
                  <Text>{content}</Text>
                </Review>
              );
            }
          )}
        </ReviewList>
      ) : (
        <p>Sorry, no reviews yet!</p>
      )}
      <Toaster />
    </>
  );
};

export default Reviews;
