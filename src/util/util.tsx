import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingBox } from '../component/emotion/component';

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

interface FetcherProps {
  query: () => {
    isLoading: boolean;
    isError: boolean;
  };
  children: ReactNode;
}

const Fetcher = ({ query, children }: FetcherProps) => {
  const { isLoading, isError } = query();

  if (isLoading) {
    return <LoadingBox />;
  }
  if (isError) {
    return <div>API Error!</div>;
  }

  return <div>{children}</div>;
};

export default Fetcher;
