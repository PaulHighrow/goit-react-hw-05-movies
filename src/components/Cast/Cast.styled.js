import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

export const CastPic = styled.img`
  width: 100%;
`;

export const CastName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;

  display: flex;
  flex-direction: column;
`;

export const CastCharacter = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;
