import { useState } from 'react';

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
