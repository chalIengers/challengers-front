/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

// 라벨 컴포넌트
interface TagType {
  children?: ReactNode;
  width?: string;
  height?: string;
}
const Tag = ({ children, width, height }: TagType) => {
  return (
    <span
      css={css`
        margin: 100px;
        width: ${width}em;
        height: ${height}em;
        color: white;
        background-color: #4f85e8;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: Pretendard;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.42px;
      `}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  children: "서비스 형태가 들어가요",
  width: "10",
  height: "1.7",
};
export default Tag;
