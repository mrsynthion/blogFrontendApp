import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const PostsWrapper = styled.div<{ length: Number }>`
  width: 100%;
  display: grid;
  grid-template-rows: ${({ length }) => `repeat(${length},180px)`};
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  margin: 10px 0;
  height: 100px;
`;
