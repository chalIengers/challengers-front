import React from 'react';
import { useSelector } from 'react-redux';
import {
  Banner,
  ProjectBox,
  FlexWrapContainer,
  TextBox,
  TagList,
  LoadingContainer,
} from '../emotion/component';
import { Body1, Header2, Inner, Section } from '../emotion/GlobalStyle';
import { useGetProjectsBoxHook } from './hook';
import { ProjectBoxProps } from '../../types/globalType';
import { SelectBoxDropBox, SelectBoxModal } from './component';
import { projectOptionType } from '../../json/data';
import { selectProjects } from '../../store/slice/projectSlice';

const Index = () => {
  const { sortType, isFetching, setSortType, data } = useGetProjectsBoxHook();
  const projectDatas = useSelector(selectProjects);

  return (
    <Inner>
      <Banner />

      <Section gap="5.6">
        <Section>
          <TextBox margin="1.6">
            <Header2>챌린저스에 등록된 프로젝트</Header2>
            <SelectBoxDropBox
              options={projectOptionType.sort}
              value="sort"
              sortType={sortType}
              setSortType={setSortType}
            />
          </TextBox>
          <TagList>
            <SelectBoxDropBox
              options={projectOptionType.service}
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
