import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetVideosByTopViewQuery,
  useGetVideosQuery,
} from '../../store/controller/projectController';
import { addProject, resetProject, selectProjects } from '../../store/slice/projectSlice';

export function useSelectBoxes() {
  const { sort } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortType, setSortType] = useState({
    service: '',
    stack: '',
    sort: sort === 'popular' ? '인기도 순' : '최신 등록순',
  });
  const [pageNumber, setPageNumber] = useState(0);

  const { data: videosData, isFetching: videosFetching } = useGetVideosQuery({
    size: 6,
    page: pageNumber,
  });
  const { data: topViewData, isFetching: topViewFetching } = useGetVideosByTopViewQuery({
    size: 6,
    page: pageNumber,
  });

  const data = sort === 'popular' ? topViewData : videosData;
  const isFetching = sort === 'popular' ? topViewFetching : videosFetching;

  useEffect(() => {
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
    service: ['전체서비스', '웹 서비스', '소셜미디어', '안드로이드'],
    stack: ['기술스택', 'React', 'JavaScript', 'Node.js', 'Spring', 'Java'],
    sort: ['최신 등록순', '인기도 순'],
  };

  const handleSelectChange = (key: string) => (selectedValue: string) => {
    if (selectedValue === '인기도 순' && sort !== 'popular') {
      navigate('/project/popular');
      window.location.reload();
    } else if (selectedValue === '최신 등록순' && sort !== 'recent') {
      navigate('/project/recent');
      window.location.reload();
    }
    setSortType((prevSortType) => ({ ...prevSortType, [key]: selectedValue }));
  };

  const handleScroll = () => {
    // 스크롤이 아래로 내려갔을 때의 처리
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isFetching &&
      data?.totalPages !== pageNumber
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
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
    projectDatas,
    isFetching,
    sortType,
    optionType,
    handleSelectChange,
    pageNumber,
  };
}
