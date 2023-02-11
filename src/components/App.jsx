import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { lazy, Suspense } from 'react';
import { Header } from './App.styled';

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
    <div
      style={{
        padding: '40px',
      }}
    >
      <Navigation />
      <Suspense
        fallback={
          <div>
            <Header>Loading...</Header>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
