import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        input,
        textarea,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
          font-family: 'Pretendard', 'Noto Sans KR', 'sans-serif';
          background-color: #000;
          height: 100vh;
          overflow-y: scroll;
          /* -ms-overflow-style: none; 인터넷 익스플로러
          scrollbar-width: none; 파이어폭스
          &::-webkit-scrollbar {
            display: none;
          } */

          body {
            font-size: 1.6rem;
            font-style: normal;
            line-height: normal;
            letter-spacing: -3%;
            color: #fff;
          }
        }
        ol,
        ul {
          list-style: none;
        }
        a {
          background-color: transparent;
          text-decoration: none;
          outline: none;
          color: inherit;
          &:active,
          &:hover {
            text-decoration: none;
            color: inherit;
            outline: 0;
          }
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          border: none;
          background: none;
          padding: 0;
          user-select: none;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: inherit;
          font: inherit;
          color: inherit;
        }
        input {
          outline: none;
        }
        div {
          -webkit-touch-callout: none;
          user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
        }
        img {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
