import styled from '@emotion/styled';
import theme from '../../styles/theme';

//  color 
export const IndexContainer = styled.div`
  background-color: ${theme.palette.gray.black};
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  align-items: start;
  margin-top: 12rem;
  margin-bottom: 16.6rem;
  color: ${theme.palette.gray.white};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  margin-top: 3rem;
`;
export const HeadTitle = styled.div`
  ${theme.textVariants.heading2}
`;
export const Body = styled.div``;
export const BodyTitle = styled.div`
  display: flex;
`;

export const SelectBoxWrapper = styled.div`
  margin-right: 1rem;
`;
