import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Body1 } from '../component/emotion/GlobalStyle';

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
  query: {
    isLoading: boolean;
    isError: boolean;
    error?: any;
    data?: any;
  };
  // eslint-disable-next-line no-unused-vars
  children: (data: any) => React.ReactNode;
  loading: React.ReactNode;
}

export const ApiFetcher = ({ query, children, loading }: FetcherProps) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return loading;
  if (isError) {
    console.log(error);
    return <Body1>Api 통신 에러!</Body1>;
  }

  // 호출 시 data 값을 children으로 전달
  return children(data);
};
