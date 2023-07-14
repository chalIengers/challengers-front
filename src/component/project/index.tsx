import React from "react";
import styled from "@emotion/styled";

import { ContainerComponent } from "../emotion/component";

const IndexContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Index: React.FC = () => {
  return (
    <IndexContainer>
      <ContainerComponent height="200px">test</ContainerComponent>
    </IndexContainer>
  );
};

export default Index;
