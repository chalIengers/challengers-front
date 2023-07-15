import React, { useState } from 'react';
import styled from '@emotion/styled';

import {
  SelectBox,
  ContainerComponent,
  ProjectBox,
  FlexContainer,
} from "../emotion/component";

const IndexContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Index: React.FC = () => {
  // Selectbox 컴포넌트
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["전체서비스", "기술스택", "메뉴1"];

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  // ProjectInfoBox 컴포넌트
  const tags = ["웹 서비스", "토스 프로덕트 팀", "React"];
  return (
    <IndexContainer>
      <ContainerComponent height="200px">
        <SelectBox
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
        />
      </ContainerComponent>
      <br />
      <FlexContainer>
        <ProjectBox
          title="Main Project"
          content="This is the content of the main project."
          tags={tags}
        />
        <ProjectBox
          title="Secondary Project"
          content="This is the content of the secondary project."
          tags={tags}
        />
        <ProjectBox
          title="Another Project"
          content="This is the content of another project."
          tags={tags}
        />
        <ProjectBox
          title="Another Project"
          content="This is the content of another project."
          tags={tags}
        />
      </FlexContainer>
    </IndexContainer>
  );
};

export default Index;
