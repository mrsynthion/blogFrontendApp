import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const PostsWrapper = styled.div<{ length: Number }>`
  width: 100%;
  display: grid;
  grid-template-rows: ${({ length }) => `repeat(${length},300px)`};
  align-items: center;
  justify-items:center;
`;
