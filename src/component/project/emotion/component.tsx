/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import theme from '../../../styles/theme';
import {
  ContainerType,
  InfoDownContainerType,
  LinkImgList,
  LinkImgProps,
} from '../../../types/globalType';

// 링크 이미지 더미 데이터

const linkImgList: LinkImgList = {
  github:
    'https://s3-alpha-sig.figma.com/img/77ad/14cb/0aedd94f6fe65c5e4d8a90e610c3fde9?Expires=1693785600&Signature=GKQs4dQxjrHeRoKieiP94tenk~teTV8OV9T3rcXNUMbm6Mms-~uf28hZzMvRAwf6ZYsoI-Wi~LLVtxsWmJl03JxE-GDt2uGrmWmpw8jS~AMtbQ~NkHX1CVti9vHqDJuhB0uCdUWMaJvUW6qrsKRH7ysvSpjsIduSb0P~xsKl-8AtzhQcVxFkmlnMDhGEj9R77lK5RitdrRgJSUBS0SwxVO7xKbNThB3SX1WENFHid9Yeod4Hd1E7TQarx8uUzT6hRCzFQSVdaWrmiYAO92phiieTQWXG5SOdBZtsn7B05KLahmZeUWSIpNjZ2hJbJe16dHaFGlaxZuYgw-S4pxhsAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  notion: 'https://via.placeholder.com/30x30',
  figma:
    'https://s3-alpha-sig.figma.com/img/5ba5/4044/d8658bbb3fe267543532844dd4d787de?Expires=1693785600&Signature=C-~stuN2u1-9EbQ6k549VCagh-ZopcdZNsxE7JQDl67zU8A-8gQ--JMhC8L5IJ6Agz69u0TWg-JV-LpmLz4FQSvIh7P-uMtvxYnvV25ENEo29umUq0umw4FmYjqz6WTFCGUJLCXQiZKWl5iKAQnm5K3095GgLEfUr2M1xFL-7czfu-3uuNO5H0b3Fm2tELRuz9qSEzxMi8338GCoEdU~nppHtTIU7JP9-PnmgM9b21ofi8dlVTMyxZDKLXk6Zu8T5eEfpuTwu~2ySQAuKGVbyZ5l1Huu9fBoWPCnvKdFXkvS-0e-B0Up52K7SWlfU1URo5aqSg9E4l0DVXV42LdJVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  other: `${process.env.PUBLIC_URL}/img/link.png`,
};

/**
 * 노션, 깃허브 등의 이미지를 보여주는 컴포넌트
 * @param name link 이미지 이름
 * @param type link 이미지 크기 타입
 */
export const LinkImg = ({ name, large }: LinkImgProps) => {
  return (
    <img
      src={linkImgList[name]}
      alt={name}
      css={css`
        width: ${large ? 4.8 : 3.2}rem;
        height: ${large ? 4.8 : 3.2}rem;
      `}
    />
  );
};

export const InfoContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        position: relative;
        width: 32rem;
        height: auto;
        border-radius: 1.4rem;
      `}
    >
      {children}
    </div>
  );
};

export const InfoUpperContainer = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        padding: 1.8rem;
        border-radius: 1.4rem 1.4rem 0 0;
        background: ${theme.palette.primary[500]};
      `}
    >
      {children}
    </div>
  );
};

export const InfoDownContainer = ({ children, fixHeight }: InfoDownContainerType) => {
  return (
    <div
      css={css`
        color: ${theme.palette.gray.black};
        columns: ${theme.palette.gray.black};
        border-radius: 0 0 1.4rem 1.4rem;
        background: #e8f3ff;
        padding: 2.4rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        min-height: ${fixHeight && 18}rem;
      `}
    >
      {children}
    </div>
  );
};

InfoDownContainer.defaultProps = {
  fixHeight: false,
};

export const InfoInput = ({ placeholder, large }: { placeholder: string; large?: boolean }) => (
  <input
    css={css`
      background-color: transparent;
      ${large ? theme.typography.header2 : theme.typography.body2};
      &::placeholder {
        color: #cbcbcb;
      }
    `}
    placeholder={placeholder}
  />
);

InfoInput.defaultProps = {
  large: false,
};
