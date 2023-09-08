import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Body1 } from '../component/emotion/GlobalStyle';
import { FetcherProps } from '../types/globalType';
import { useRefreshUserMutation } from '../store/controller/signUpController';
import { getCookie } from '../store/cookie';
import { setUser } from '../store/slice/userSlice';

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
export const RefreshTokenUtil = () => {
  const dispatch = useDispatch();
  const [refreshApi] = useRefreshUserMutation();

  useEffect(() => {
    const refreshToken = getCookie('refreshToken');
    if (refreshToken) {
      const fetchData = async () => {
        try {
          const { accessToken } = await refreshApi({ refreshToken }).unwrap('data');
          dispatch(setUser({ accessToken }));
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      };

      // 최초 실행
      fetchData();
      // 29분마다 실행
      const interval = setInterval(fetchData, 29 * 60 * 1000);
      // 컴포넌트가 unmount될 때 interval을 정리
      return () => {
        clearInterval(interval);
      };
    }
    return () => {}; // 값을 반환
  }, []);
};

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
