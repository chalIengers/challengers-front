import React from 'react';
import { Banner, Club } from './emotion/component';
import { ProjectLink } from './project/emotion/component';

const index = () => {
  return (
    <div>
      Main
      <Banner type="large" />
      <Banner type="small" />
      <Club name="" clubImg="" />
      <ProjectLink />
    </div>
  );
};

export default index;
