import React from 'react';
import { Banner, ProjectBox, FlexWrapContainer, TextBox, TagList } from '../emotion/component';
import { Body1, Header2, Inner, Section } from '../emotion/GlobalStyle';
import { useSelectBoxes } from './hook';
import { ProjectBoxProps } from '../../types/globalType';
import { LoadingContainer, SelectBoxDropBox, SelectBoxModal } from './component';

const Index = () => {
  const { sortType, optionType, projectDatas, isFetching, setSortType, data } = useSelectBoxes();

  return (
    <Inner>
      <Banner />
      <Section gap="5.6">
        <Section>
          <TextBox margin="1.6">
            <Header2>챌린저스에 등록된 프로젝트</Header2>
            <SelectBoxDropBox
              options={optionType.sort}
              value="sort"
              sortType={sortType}
              setSortType={setSortType}
            />
          </TextBox>
          <TagList>
            <SelectBoxDropBox
              options={optionType.service}
              value="service"
              sortType={sortType}
              setSortType={setSortType}
            />
            <SelectBoxModal value="stack" sortType={sortType} setSortType={setSortType} />
          </TagList>
        </Section>

        <FlexWrapContainer>
          {projectDatas?.map((project: ProjectBoxProps) => (
            <ProjectBox key={project.id} projectData={project} />
          ))}
        </FlexWrapContainer>

        {isFetching && <LoadingContainer />}
        {data?.last && <Body1>마지막 페이지입니다.</Body1>}
      </Section>
    </Inner>
  );
};

export default Index;
