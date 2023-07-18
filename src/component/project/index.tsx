import React, { useState } from 'react';
import test from '../../json/test.json';
import {
  Banner,
  SelectBox,
  // ContainerComponent,
  ProjectBox,
  FlexContainer,
  Header,
} from '../emotion/component';
import {
  IndexContainer,
  Inner,
  Head,
  HeadTitle,
  Body,
  BodyTitle,
  SelectBoxWrapper,
} from './component';

const Index: React.FC = () => {
  // Selectbox 컴포넌트
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  const options1 = ['전체서비스', '메뉴1'];
  const options2 = ['기술스택', '메뉴1'];
  const options3 = ['최신 등록순', '메뉴1'];

  const handleSelectChange1 = (selectedValue: string) => {
    setSelectedOption1(selectedValue);
  };

  const handleSelectChange2 = (selectedValue: string) => {
    setSelectedOption2(selectedValue);
  };

  const handleSelectChange3 = (selectedValue: string) => {
    setSelectedOption3(selectedValue);
  };

  return (
    <IndexContainer>
      <Header />
      <Inner>
        <Banner type="small" />
        <Head>
          <HeadTitle>챌린저스에 등록된 프로젝트</HeadTitle>
          <SelectBox
            options={options3}
            value={selectedOption3}
            onChange={handleSelectChange3}
            back="#000"
          />
        </Head>
        <Body>
          <BodyTitle>
            <SelectBoxWrapper>
              <SelectBox
                options={options1}
                value={selectedOption1}
                onChange={handleSelectChange1}
              />
            </SelectBoxWrapper>
            <SelectBoxWrapper>
              <SelectBox
                options={options2}
                value={selectedOption2}
                onChange={handleSelectChange2}
              />
            </SelectBoxWrapper>
          </BodyTitle>
          <br />
          <FlexContainer>
            {test &&
              test.Project.map((project) => (
                <ProjectBox
                  key={project.id}
                  title={project.title}
                  content={project.content}
                  tags={project.tags}
                />
              ))}
          </FlexContainer>
        </Body>
      </Inner>
    </IndexContainer>
  );
};

export default Index;
