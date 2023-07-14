import React from 'react';
import { Banner, Club } from './emotion/component';
import { LinkInputBox, ProjectLinkButton } from './project/emotion/component';

const index = () => {
  return (
    <div>
      Main
      <Banner type="large" />
      <Banner type="small" />
      <Club name="" clubImg="" />
      <ProjectLinkButton name="notion" url="www.naver.com" />
      <LinkInputBox />
    </div>
  );
};

export default index;
