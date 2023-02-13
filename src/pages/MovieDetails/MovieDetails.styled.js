import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 25px;
`;

export const DetailsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const DetailsText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 15px;
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const DetailsButtons = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const GoBack = styled.button`
  flex-shrink: 0;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  background-color: #f7f2c7;
  border: 2px solid #727272;

  &:hover,
  &:focus {
    color: #be7214;
    background-color: #ecf5f0;
  }
`;

export const GoBackIcon = styled(TiArrowBack)`
  color: currentColor;
  width: 24px;
  height: 24px;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 400px;
`;
