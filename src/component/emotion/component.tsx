import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface ContainerComponentProps {
  width?: string;
  height: string;
  children?: ReactNode;
}

const StyledContainerComponent = styled.div<ContainerComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #212121;
  border-radius: 10px;
`;

/**
 * Container 컴포넌트
 * @Containercomponent
 * @param {number} props.width - 컨테이너 컴포넌트의 너비
 * @param {number} props.height - 컨테이너 컴포넌트의 높이
 * @param {ReactNode} props.children - 컨테이너 컴포넌트의 자식 요소
 */
const ContainerComponent: React.FC<ContainerComponentProps> = ({
  width,
  height,
  children,
}) => {
  return (
    <StyledContainerComponent width={width} height={height}>
      {children}
    </StyledContainerComponent>
  );
};

ContainerComponent.defaultProps = {
  width: "1200px",
  children: null,
};

export { ContainerComponent };
