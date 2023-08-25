import { ChangeEvent, useState } from 'react';

export const useImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const uploadImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageSrc(result);
    };
    reader.readAsDataURL(file);
  };

  return { imageSrc, uploadImage };
};

export const useInputState = <T>(initialValue: T | null = null) => {
  const [value, setValue] = useState<T | null>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  return { value, onChange: handleChange };
};
