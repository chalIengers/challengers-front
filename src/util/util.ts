import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 태그가 존재하지 않을 시 ['임의 태그'] 반환
export const GenerateTags = (tags: string[]) => (tags.length === 0 ? ['임의 태그'] : tags);

// 경로에 변화가 생기거나 새로고침 시 페이지의 최상단으로 이동
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 새로고침 시 자동으로 이전 스크롤 위치로 이동하는 것을 방지
export const PreventAutoScroll = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
};
