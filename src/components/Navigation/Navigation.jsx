import { ButtonStyledLink } from 'components/MoviesList/MoviesList.styled';
import { Header, Title, NavBox } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Title to="/" end>
        React Movie Catalogue🎬
      </Title>
      <NavBox>
        <ButtonStyledLink to="/" end>
          Home Page
        </ButtonStyledLink>
        <ButtonStyledLink to="/movies">Find a Movie</ButtonStyledLink>
      </NavBox>
    </Header>
  );
};
