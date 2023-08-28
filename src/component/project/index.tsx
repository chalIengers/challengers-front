import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Banner,
  SelectBox,
  ProjectBox,
  FlexWrapContainer,
  TextBox,
  TagList,
} from '../emotion/component';
import { Body1, Header2, Inner, Section } from '../emotion/GlobalStyle';
import { useSelectBoxes } from './hook';
import { ProjectBoxProps } from '../../types/globalType';
import { useGetVideosInfinityQuery } from '../../store/projectController';
import { LoadingContainer } from './component';

const Index = () => {
  const { sort } = useParams();
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isFetching } = useGetVideosInfinityQuery({ size: 6, page: pageNumber });
  const { sortType, optionType, handleSelectChange } = useSelectBoxes(
    sort === 'popular' ? '인기도 순' : '최신 등록순',
  );

  const handleScroll = () => {
    // 스크롤이 아래로 내려갔을 때의 처리
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isFetching &&
      data.totalPages !== pageNumber
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

  return (
    <Inner>
      <Banner />
      <Section gap="5.6">
        <TextBox margin="1.6">
          <Header2>챌린저스에 등록된 프로젝트</Header2>
          <SelectBox
            options={optionType.sort}
            value={sortType.sort}
            onChange={handleSelectChange('sort')}
            background="#000"
          />
        </TextBox>
        <TagList>
          <SelectBox
            options={optionType.service}
            value={sortType.service}
            onChange={handleSelectChange('service')}
          />
          <SelectBox
            options={optionType.stack}
            value={sortType.stack}
            onChange={handleSelectChange('stack')}
          />
        </TagList>

        <FlexWrapContainer>
          {data?.content.map((project: ProjectBoxProps) => (
            <ProjectBox key={project.id} projectData={project} />
          ))}
        </FlexWrapContainer>

        {isFetching && <LoadingContainer />}
        {data.totalPages === pageNumber && <Body1>마지막 페이지입니다.</Body1>}
      </Section>
    </Inner>
  );
};

export default Index;
