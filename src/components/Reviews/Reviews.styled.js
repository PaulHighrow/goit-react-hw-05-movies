import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: grid;
  gap: 25px;
  grid: auto-flow / 400px 400px;
  justify-content: center;
`;

export const Review = styled.li`
  border: 1px solid #727272;
  padding: 20px;
  max-width: 600px;
  max-height: 300px;
  overflow-y: scroll;
  /* display: flex; */
`;
export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: 'center center';
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const ReviewDate = styled.span`
  font-size: 12px;
  color: #727272;
`;

export const Text = styled.span`
  font-size: 14px;
`;
