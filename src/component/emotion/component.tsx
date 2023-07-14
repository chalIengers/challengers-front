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

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
}

const StyledSelectBox = styled.select`
  border-radius: 3.843px;
  background: #4f85e8;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='%23ffffff' d='M6 6.8l4-4H2l4 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 6px center;
  background-size: 12px;
  padding-right: 24px;
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
