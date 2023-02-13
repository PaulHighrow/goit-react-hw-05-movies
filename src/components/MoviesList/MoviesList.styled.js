import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const ListLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #be7214;
  }
`;

export const ButtonStyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  padding: 8px;
  background-color: #f7f2c7;
  border: 2px solid #727272;
  border-radius: 10px;

  &:hover,
  &:focus {
    color: #be7214;
    background-color: #ecf5f0;
  }
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.span`
  display: inline-block;
  max-height: 1.2em;
  background-color: #dddd06;
  padding: 3px 6px;
  border-radius: 10px;
`;
