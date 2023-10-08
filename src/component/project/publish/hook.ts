import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
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
  const wwwIndex = input.indexOf('www');
  if (wwwIndex !== -1) {
    const startIndex = input.indexOf('.', wwwIndex);
    const endIndex = input.indexOf('.', startIndex + 1);
    if (startIndex !== -1 && endIndex !== -1) {
      return input.slice(startIndex + 1, endIndex);
    }
  } else {
    const startIndex = input.indexOf('//');
    const endIndex = input.indexOf('.');
    if (startIndex !== -1 && endIndex !== -1) {
      return input.slice(startIndex + 2, endIndex);
    }
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
interface StackTag {
  id: string;
  name: string;
}
export const useStackTags = () => {
  const [StackTags, setStackTags] = useState<StackTag[]>([]);

  const AddStackTag = (newStackTag: string) => {
    const newTag: StackTag = {
      id: v4(),
      name: newStackTag,
    };
    setStackTags((prevStackTags) => [...prevStackTags, newTag]);
  };

  const removeStackTag = (tagToRemove: string) => {
    console.log('xptmxm');
    setStackTags((prevStackTags) => prevStackTags.filter((tag) => tag.id !== tagToRemove));
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

export const validateProjectData = (otherData: any) => {
  if (!otherData.imageUrl) {
    alert('이미지를 넣어주세요');
    return 'ImageContainer';
  }
  if (!otherData.projectName) {
    alert('제목을 작성해주세요');
    return 'ImageContainer';
  }
  if (!otherData.projectDescription) {
    alert('소제목을 작성해주세요');
    return 'ImageContainer';
  }
  if (!otherData.projectPeriod) {
    alert('제작 기간을 작성해주세요');
    return 'SummaryContainer';
  }
  if (otherData.projectTechStack.length === 0) {
    alert('기술 스택을 작성해주세요');
    return 'SummaryContainer';
  }
  if (
    otherData.projectCrew.length === 0 ||
    otherData.projectCrew.some(
      (crew: any) =>
        crew.name.trim() === '' || crew.position.trim() === '' || crew.role.trim() === '',
    )
  ) {
    alert('유효하지 않은 팀원 구성입니다');
    return 'teamInfoContainer';
  }
  const regex = /^(http|https):\/\/.*\./;
  if (!otherData.projectLink.every((item: any) => regex.test(item.linkUrl.trim()))) {
    alert('한 개 이상의 유효하지 않은 링크가 존재합니다');
    return 'LinkContainer';
  }
  return null;
};
const monthMap: { [key: string]: string } = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

export const formatDateString = (dateString: any) => {
  const [day, month, dayNum, year] = dateString.split(' ');
  const formattedMonth = monthMap[month];
  const formattedDayNum = dayNum.length === 1 ? `0${dayNum}` : dayNum;

  return `${year}-${formattedMonth}-${formattedDayNum}`;
};
export const useDateRanges = () => {
  const [formattedDateRange, setFormattedDateRange] = useState('');

  const handleDateRangeChange = (range: string) => {
    setFormattedDateRange(range);
  };

  return {
    formattedDateRange,
    handleDateRangeChange,
  };
};
