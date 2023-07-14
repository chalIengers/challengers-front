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
  border-radius: 1.25em;
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
  width: "75em", // 1200px -> 75em
  children: null,
};

export { ContainerComponent };

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
}

const StyledSelectBox = styled.select`
  border-radius: 0.484em;
  background: #4f85e8;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875em;
  font-style: normal;
  font-weight: 700;
  padding: 0.625em;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.0625em;
  text-overflow: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='0.4375em' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.375em center;
  background-size: 0.75em;
  padding-right: 1.5em;
`;

/**
 * SelectBox 컴포넌트
 * @component SelectBox
 * @param {string[]} props.options - 선택할 수 있는 옵션들의 배열
 * @param {string} props.value - 현재 선택된 값
 * @param {function} props.onChange - 값이 변경될 때 호출되는 콜백 함수
 */
const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <StyledSelectBox value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelectBox>
  );
};
export { SelectBox };

interface ProjectBoxProps {
  title: string;
  content: string;
  tags: string[];
}

const StyledProjectBox = styled.div<ProjectBoxProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #ffffff;
  padding: 1em 1.3125em;
  width: 23.125em;
  height: 24.6875em;
  background: #212121;
  border-radius: 1.1875em;
  margin: 0;
`;
const StyledProjectTag = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledTag = styled.div`
  border-radius: 0.3125em;
  background: #4f85e8;
  padding: 0.375em 0.625em;
  margin: 0 0.5625em 0.5625em 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.5625em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
  margin-bottom: 0.625em;
`;
const StyledText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

/**
 * Projectbox 컴포넌트
 * @component ProjectBox
 * @param {string} props.title - 프로젝트 제목
 * @param {string} props.content - 프로젝트 내용
 * @param {string[]} props.tags - 프로젝트 태그들의 배열
 */
const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, tags }) => {
  return (
    <StyledProjectBox title={title} content={content} tags={tags}>
      <img
        src="https://i.ibb.co/yktPkxP/image-5.png"
        alt="Project"
        className="project-image"
        style={{
          width: "20.5625em",
          height: "14.0625em",
          borderRadius: "0.625em",
          marginBottom: "1em",
        }}
      />
      {tags && (
        <StyledProjectTag>
          {tags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledProjectTag>
      )}
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{content}</StyledText>
    </StyledProjectBox>
  );
};

export { ProjectBox };

interface FlexContainerProps {
  children: React.ReactNode;
}

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.8125em;
  width: 75em;
  height: 100%;
  margin: 0 auto;
`;
/**
 * FlexContainer 컴포넌트
 * @component FlexContainer
 * @param {React.ReactNode} props.children - FlexContainer 내부의 자식 요소
 */
const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export { FlexContainer };
