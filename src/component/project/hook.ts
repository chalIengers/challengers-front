import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetVideosQuery } from '../../store/controller/projectController';
import { addProject, resetProject, selectProjects } from '../../store/slice/projectSlice';
import { SortType } from '../../types/globalType';

export function useSelectBoxes() {
  const { sort } = useParams();
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState<SortType>({
    service: '전체 서비스',
    stack: [],
    sort: sort === 'popular' ? '인기순' : '최신 등록순',
  });

  const mapping: { [key: string]: string } = {
    '전체 서비스': 'ALL',
    '웹 서비스': 'WEB',
    '앱 서비스': 'APP',
    '기타 서비스': 'ETC',
    '최신 등록순': 'NEW',
    인기순: 'POPULAR',
    추천순: '',
  };

  const [pageNumber, setPageNumber] = useState(0);

  const { data, isFetching } = useGetVideosQuery({
    size: 6,
    page: pageNumber,
    categories: mapping[sortType.service],
    sort: mapping[sortType.sort],
  });

  useEffect(() => {
    console.log(sortType);
    return () => {
      dispatch(resetProject());
      setPageNumber(0);
    };
  }, [sortType]);

  useEffect(() => {
    console.log(data);
    console.log(pageNumber);
    if (data) dispatch(addProject(data?.content));
  }, [data]);

  const projectDatas = useSelector(selectProjects);

  const optionType = {
    service: ['전체 서비스', '웹 서비스', '앱 서비스', '기타 서비스'],
    sort: ['최신 등록순', '인기순', '추천순'],
  };

  const handleScroll = () => {
    // 스크롤이 아래로 내려갔을 때의 처리
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isFetching &&
      data?.totalPages !== pageNumber
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
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
    projectDatas,
    isFetching,
    sortType,
    optionType,
    pageNumber,
    setSortType,
  };
}
