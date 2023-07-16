import React from 'react';
import Tag, { Banner, Header, ImageBox, TeamInfoBox, Club } from './emotion/component';
import { LinkInputBox, ProjectLinkButton } from './project/emotion/component';

const index = () => {
  return (
    <div>
      Main
      <Header />
      <Tag>서비스 형태가 들어가요</Tag>
      <ImageBox />
      <TeamInfoBox />
      <Banner type="large" />
      <Banner type="small" />
      <Club name="" clubImg="" />
      <ProjectLinkButton name="notion" url="https://www.naver.com" />
      <LinkInputBox />
    </div>
  );
};

export default index;
