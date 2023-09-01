import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetVideosByTopViewInfinityQuery,
  useGetVideosByTopViewQuery,
  useGetVideosInfinityQuery,
} from '../../store/controller/projectController';

export function useSelectBoxes() {
  const { sort } = useParams();
  const [sortType, setSortType] = useState({
    service: '',
    stack: '',
    sort: sort === 'popular' ? '인기도 순' : '최신 등록순',
  });
  const [pageNumber, setPageNumber] = useState(0);

  const { data: videosData, isFetching: videosFetching } = useGetVideosInfinityQuery({
    size: 6,
    page: pageNumber,
  });
  const { data: topViewData, isFetching: topViewFetching } = useGetVideosByTopViewInfinityQuery({
    size: 6,
    page: pageNumber,
  });

  const data = sort === 'popular' ? topViewData : videosData;
  const isFetching = sort === 'popular' ? topViewFetching : videosFetching;

  const optionType = {
    service: ['전체서비스', '웹 서비스', '소셜미디어', '안드로이드'],
    stack: ['기술스택', 'React', 'JavaScript', 'Node.js', 'Spring', 'Java'],
    sort: ['최신 등록순', '인기도 순'],
  };

  const handleSelectChange = (key: string) => (selectedValue: string) => {
    setSortType((prevSortType) => ({ ...prevSortType, [key]: selectedValue }));
  };

  const handleScroll = () => {
    // 스크롤이 아래로 내려갔을 때의 처리
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isFetching &&
      data?.totalPages !== pageNumber
    ) {
      setPageNumber(pageNumber + 1);
      console.log('도달!');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFetching]);

  return {
    data,
    isFetching,
    sortType,
    optionType,
    handleSelectChange,
    pageNumber,
  };
}
