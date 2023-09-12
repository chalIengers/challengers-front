import React from 'react';
import { render } from '@testing-library/react';
import Index from './Index';

test('renders hello message', () => {
  const { getByText } = render(<Index />); // 컴포넌트 렌더링

  // 렌더링된 컴포넌트에서 "Hello, World!" 텍스트를 찾아서 확인
  const helloMessage = getByText(/Hello, World!/i);
  expect(helloMessage).toBeInTheDocument();
});
