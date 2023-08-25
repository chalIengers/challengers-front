import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Banner,
  SelectBox,
  ProjectBox,
  FlexWrapContainer,
  TextBox,
  TagList,
} from '../emotion/component';
import { Header2, Inner, Section } from '../emotion/GlobalStyle';
import { useSelectBoxes } from './hook';
import { useGetVideosQuery } from '../../store/projectApi';
import { ProjectBoxProps } from '../../types/globalType';
import ApiFetcher from '../../util/util';
import { LoadingContainer } from './component';

const Index = () => {
  const { sort } = useParams();
  const queryResult = useGetVideosQuery({});

  const { sortType, optionType, handleSelectChange } = useSelectBoxes(
    sort === 'popular' ? '인기도 순' : '최신 등록순',
  );

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

        <ApiFetcher query={queryResult} loading={<LoadingContainer />}>
          <FlexWrapContainer>
            {queryResult.data?.map((project: ProjectBoxProps) => (
              <ProjectBox key={project.id} projectData={project} />
            ))}
          </FlexWrapContainer>
        </ApiFetcher>
      </Section>
    </Inner>
  );
};

export default Index;
