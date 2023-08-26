import { ChangeEvent, useState } from 'react';

export const useChangeInput = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, handleOnChange };
};
