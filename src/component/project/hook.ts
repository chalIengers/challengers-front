import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetVideosQuery, useGetTechStacksQuery } from '../../store/controller/projectController';
import { addProject, resetProject } from '../../store/slice/projectSlice';
import { SortType, TechStacksModalProps } from '../../types/globalType';
import { projectMappingApi } from '../../json/data';

// 초기 데이터
const initialSortType: SortType = {
  service: '전체 서비스',
  stack: [],
  sort: '최신 등록순',
};

export function useGetProjectsBoxHook() {
  const { sort } = useParams();
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState<SortType>({
    ...initialSortType,
    sort: sort === 'popular' ? '인기순' : '최신 등록순',
  });
  const [pageNumber, setPageNumber] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { data, isFetching } = useGetVideosQuery({
    size: 6,
    page: pageNumber,
    categories: projectMappingApi[sortType.service],
    sort: projectMappingApi[sortType.sort],
    techStack: sortType.stack,
  });

  useEffect(() => {
    return () => {
      dispatch(resetProject());
      setPageNumber(0);
    };
  }, [sortType, dispatch]);

  // 데이터 업데이트 시 프로젝트 추가
  useEffect(() => {
    if (data) dispatch(addProject(data?.content));
  }, [data, dispatch]);

  useEffect(() => {
    const options = {
      root: null, // viewport를 기준으로 감시
      rootMargin: '0px',
      threshold: 0.1, // 대상 엘리먼트가 10% 이상 보일 때 콜백 실행
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isFetching && pageNumber < data?.totalPages) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isFetching, data?.totalPages, pageNumber]);

  return {
    data,
    isFetching,
    sortType,
    pageNumber,
    setSortType,
    containerRef,
  };
}

export const useTeckStackModalHook = ({ value, setSortType }: TechStacksModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const [techStacks, setTechStacks] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const { data } = useGetTechStacksQuery({});

  const uniqueValuesArray: string[] = Array.from(
    new Set(data?.map((item: { name: string }) => item.name)),
  );
  const filteredItems = uniqueValuesArray.filter((item: string) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickStack = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = e.currentTarget;
    if (techStacks.length < 5 && !techStacks.includes(innerText)) {
      setTechStacks((prev) => [...prev, innerText]);
    }
    setInputValue('');
  };

  const handleDeleteStack = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = e.currentTarget;
    const updatedTechStacks = techStacks.filter((stack) => stack !== innerText);
    setTechStacks(updatedTechStacks);
  };

  const handleSubmit = () => {
    setSortType((prev) => ({ ...prev, [value]: [...techStacks] }));
    setShowOptions((prev) => !prev);
  };

  useEffect(() => {
    setInputValue('');
  }, [showOptions]);

  return {
    inputValue,
    techStacks,
    setShowOptions,
    showOptions,
    filteredItems,
    handleInputChange,
    handleClickStack,
    handleDeleteStack,
    handleSubmit,
  };
};
