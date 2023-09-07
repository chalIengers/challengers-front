import React, { useEffect, useState } from 'react';
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

  const { data, isFetching } = useGetVideosQuery({
    size: 6,
    page: pageNumber,
    categories: projectMappingApi[sortType.service],
    sort: projectMappingApi[sortType.sort],
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
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isFetching &&
        data?.totalPages !== pageNumber
      ) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFetching, data?.totalPages, pageNumber]);

  return {
    data,
    isFetching,
    sortType,
    pageNumber,
    setSortType,
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

  const handleClickStack = (e: React.MouseEvent<HTMLLIElement>) => {
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
