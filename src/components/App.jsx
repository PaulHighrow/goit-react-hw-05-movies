import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const Movies = lazy(() =>
  import(/* webpackChunkName: "Moviespage" */ '../pages/Movies/Movies')
);
const MovieDetails = lazy(() =>
  import(
    /* webpackChunkName: "MovieDetailspage" */ '../pages/MovieDetails/MovieDetails'
  )
);
const Cast = lazy(() => import(/* webpackChunkName: "Cast" */ './Cast/Cast'));
const Reviews = lazy(() =>
  import(/* webpackChunkName: "Reviews" */ './Reviews/Reviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
