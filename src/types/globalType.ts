import { SerializedStyles } from '@emotion/react';
import React, { ChangeEvent, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface ContainerType {
  children: ReactNode;
}

export interface StyleType {
  style: SerializedStyles;
}

export interface StyleContainerType {
  children: ReactNode;
  style?: SerializedStyles;
  onClick?: () => void;
}

export interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
  background?: string;
}

export interface ProjectBoxProps {
  id: number;
  projectName: string;
  projectDescription: string;
  imageUrl: string;
  projectCategory: string;
  belongedClubName: string;
}
interface Crew {
  name: string;
  role: string;
}
export interface TeamInfoProps {
  id: number;
  position: string;
  crew: Crew[];
}
export interface ProjectCrew {
  id: number;
  name: string;
  position: string;
  role: string;
}
export interface ProjectLink {
  id: number;
  url: string;
  name: string;
}
export interface ProjectTechStack {
  id: number;
  name: string;
}
export interface ProjectDetailProps extends ProjectBoxProps {
  id: number;
  projectName: string;
  projectDescription: string;
  imageUrl: string;
  projectCategory: string;
  belongedClubName: string;

  projectDetail: string;
  projectStatus: 1;
  projectTechStack: ProjectTechStack[];
  projectLink: ProjectLink[];
  projectCrew: ProjectCrew[];
  createdAt: Date;
  updatedAt: Date;
  uploadedUserId: 1;
  belongedClubId: null;
  projectPeriod: string;
}

export interface NavItemProps extends ContainerType {
  to: string;
}

export interface imgBoxType {
  imgSrc?: string;
}

export interface ButtonBoxProps {
  text: string | undefined;
  type: 'large' | 'small' | 'modal' | 'very_small' | 'auto' | 'large_modal';
  cancel?: boolean;
  onClick?: () => void;
  submit?: boolean;
}

export interface BannerProps {
  large?: boolean;
}

export interface TextBoxProps extends ContainerType {
  margin?: string;
}

export interface ClubComponentProps {
  id: number | string;
  name: string;
  logo: string;
}
export interface MyClubDataType extends ClubComponentProps {
  managerEmail: string;
  manager: boolean;
}

export interface ClubBoxProps extends ClubComponentProps {
  text: string;
  showToast?: boolean;
  onClick?: () => void;
}

export interface SectionType extends ContainerType {
  gap?: string;
}

export interface ProjectLinkButtonProps {
  name: string;
  url: string;
}

export interface LinkImgList {
  [key: string]: string;
}

export interface LinkImgProps {
  name: string;
  large?: boolean;
}

export interface InfoDownContainerType extends ContainerType {
  fixHeight?: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  // Add other project-related properties here
}

export interface ProjectsState {
  projects: ProjectBoxProps[];
}

export interface SignUpState {
  email: string;
  password: string;
  userName: string;
}
export interface TextInputBoxType {
  type: 'header1' | 'body2' | 'body1' | 'border';
  text?: string;
  size?: number;
  max?: number;
  inputType?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

export interface TagListType extends ContainerType {
  small?: boolean;
}

export interface LinkToProps extends ContainerType {
  to: string;
}

export interface ClubImageProps {
  onClick: () => void;
  imgFileSrc?: string;
}
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  role: string;
}

export interface Link {
  name: string;
  linkUrl: string;
}
export interface ProjectInfo {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
  projectCategory: string;
  belonedClubId: string;
  projectStatus: string;
  projectPeriod: string;
  projectTechStack: string;
  projectDetail: string;
  belonedCrewName: string;
  projectCrew: Crew[];
  projectLink: Link[];
}
export const initialLink: Link = {
  name: '',
  linkUrl: '',
};
export const initialProjectData: ProjectInfo = {
  imageUrl: '',
  projectName: '',
  projectDescription: '',
  projectCategory: '',
  belonedCrewName: '',
  belonedClubId: '',
  projectStatus: '',
  projectPeriod: '',
  projectTechStack: '',
  projectDetail: '',
  projectCrew: [],
  projectLink: [],
};

export interface DescribeBoxType {
  text: string;
}

export interface ClubLogoProps {
  logoUrl: string;
}

export interface ClubArrayContainerProps {
  clubArray: ClubLogoProps[];
  index: number;
}

export interface FetcherProps {
  query: {
    isLoading: boolean;
    isError: boolean;
    error?: any;
    data?: any;
  };
  children: (data: any) => React.ReactNode;
  loading: React.ReactNode;
}
