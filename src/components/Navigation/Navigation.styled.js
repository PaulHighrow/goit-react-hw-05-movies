import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 45px;
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 25px;
`;

export const Title = styled(NavLink)`
  font-size: 36px;
  font-weight: 700;

  text-decoration: none;
  color: #000;

  &:hover,
  &:focus {
    color: #be7214;
  }
`;
