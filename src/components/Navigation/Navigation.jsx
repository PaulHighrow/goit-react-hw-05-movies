import { StyledLink } from 'components/MoviesList/MoviesList.styled';
import { Header, Title, NavBox } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Title to="/" end>
        React Movie Catalogue🎬
      </Title>
      <NavBox>
        <StyledLink to="/" end>
          Home Page
        </StyledLink>
        <StyledLink to="/movies">Find a Movie</StyledLink>
      </NavBox>
    </Header>
  );
};
