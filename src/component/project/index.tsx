import React, { useState } from 'react';
import {
  Banner,
  SelectBox,
  ProjectBox,
  FlexWrapContainer,
  TextBox,
  TagList,
} from '../emotion/component';
import { Header2, Inner, Section } from '../emotion/GlobalStyle';
import { ProjectPreview } from '../../json/project-controller';

const Index = () => {
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
  if (!ProjectPreview) return <div>Loading ...</div>;

  return (
    <Inner>
      <Banner />
      <Section gap="5.6">
        <>
          <TextBox margin="1.6">
            <Header2>챌린저스에 등록된 프로젝트</Header2>
            <SelectBox
              options={options3}
              value={selectedOption3}
              onChange={handleSelectChange3}
              background="#000"
            />
          </TextBox>

          <TagList>
            <SelectBox options={options1} value={selectedOption1} onChange={handleSelectChange1} />
            <SelectBox options={options2} value={selectedOption2} onChange={handleSelectChange2} />
          </TagList>
        </>

        <FlexWrapContainer>
          {ProjectPreview.map((project) => (
            <ProjectBox key={project.id} projectData={project} />
          ))}
        </FlexWrapContainer>
      </Section>
    </Inner>
  );
};

export default Index;
