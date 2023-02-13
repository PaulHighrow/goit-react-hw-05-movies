import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 28px;
  height: 28px;
`;
