import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { Crews, TeamMember } from '../../../types/globalType';
import { selectUser } from '../../../store/slice/userSlice';
import { useFileUploadMutation } from '../../../store/controller/commonController';

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

export const useTeamInfoBoxes = () => {
  const [teamInfoBoxes, setTeamInfoBoxes] = useState([
    { id: 1, addInfo: false, infoData: [{ id: 1, name: '', position: '', role: '' }] },
  ]);

  const handleInfoChange = (newData: TeamMember[], boxId: number) => {
    setTeamInfoBoxes((prevBoxes) => {
      const updatedBoxes = prevBoxes.map((box) => {
        if (box.id === boxId) {
          return { ...box, infoData: newData };
        }
        return box;
      });
      return updatedBoxes;
    });
  };

  const handleAddInfoBox = () => {
    const newId = teamInfoBoxes.length + 1;
    const newInfoBox = {
      id: newId,
      addInfo: false,
      infoData: [{ id: 1, name: '', position: '', role: '' }],
    };
    setTeamInfoBoxes([...teamInfoBoxes, newInfoBox]);
  };

  const handleDeleteInfoBox = (boxId: number) => {
    setTeamInfoBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== boxId));
  };

  return {
    teamInfoBoxes,
    handleInfoChange,
    handleAddInfoBox,
    handleDeleteInfoBox,
  };
};

interface FileImageUploadProps {
  Image: (params: { accessToken: string; fileData: File }) => any;

  uploadImage: (file: File) => void;
}

export const useFileImageUpload = ({ Image, uploadImage }: FileImageUploadProps) => {
  const { accessToken } = useSelector(selectUser);
  const [Fileimage, setFileimage] = useState<File | null>(null);

  const Fileupload = async (file: any): Promise<string> => {
    try {
      if (accessToken) {
        const resultData = await Image({ accessToken, fileData: file }).unwrap();
        return resultData.msg;
      }
      throw new Error('토큰 값이 없습니다.');
    } catch (error) {
      console.log('이미지 업로드 실패:', error);
      return '';
    }
  };

  const handleImageChange = (File: File | null) => {
    if (File) {
      uploadImage(File);
      setFileimage(File);
    }
  };

  return { Fileimage, Fileupload, handleImageChange };
};

export const useStackTags = () => {
  const [StackTags, setStackTags] = useState<string[]>([]);

  const AddStackTag = (newStackTag: string) => {
    setStackTags((prevStackTags) => [...prevStackTags, newStackTag]);
  };

  const removeStackTag = (tagToRemove: string) => {
    setStackTags((prevStackTags) => prevStackTags.filter((tag) => tag !== tagToRemove));
  };

  return { StackTags, AddStackTag, removeStackTag };
};

export const useDateRange = (initialDateRange: string = '') => {
  const [DateRange, setDateRange] = useState<string>(initialDateRange);

  const DateRangeChange = (newDateRange: string) => {
    setDateRange(newDateRange);
  };

  return { DateRange, DateRangeChange };
};
export const updateProjectCrew = (teamInfoBoxes: any[], updatedData: any) => {
  const updatedProjectCrew: Crews[] = [];
  teamInfoBoxes.forEach((teamInfo) => {
    const { infoData } = teamInfo;

    infoData.forEach((memberInfo: Crews) => {
      updatedProjectCrew.push({
        name: memberInfo.name,
        position: memberInfo.position,
        role: memberInfo.role,
      });
    });
  });

  return updatedProjectCrew;
};
