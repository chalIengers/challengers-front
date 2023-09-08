import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

export const useFormFields = (State: any) => {
  const [fields, setFields] = useState(State);

  const handleFieldChange = (key: any, value: any) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  return {
    fields,
    handleFieldChange,
  };
};

export default useFormFields;

export const extractSubstring = (input: string) => {
  const startIndex = input.indexOf('//');
  const endIndex = input.indexOf('.');

  if (startIndex !== -1 && endIndex !== -1) {
    return input.slice(startIndex + 2, endIndex);
  }
  return null;
};
