import { useState } from 'react';

export function useSelectBoxes(initialSort: string) {
  const [sortType, setSortType] = useState({
    service: '',
    stack: '',
    sort: initialSort || '',
  });

  const optionType = {
    service: ['전체서비스', '웹 서비스', '소셜미디어', '안드로이드'],
    stack: ['기술스택', 'React', 'JavaScript', 'Node.js', 'Spring', 'Java'],
    sort: ['최신 등록순', '인기도 순'],
  };

  const handleSelectChange = (key: string) => (selectedValue: string) => {
    setSortType((prevSortType) => ({ ...prevSortType, [key]: selectedValue }));
  };

  return {
    sortType,
    optionType,
    handleSelectChange,
  };
}
