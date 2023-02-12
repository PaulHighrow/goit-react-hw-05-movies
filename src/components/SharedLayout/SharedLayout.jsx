import { Container, Heading } from 'components/App.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <div>
            <Heading as={'h2'}>Loading...</Heading>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
