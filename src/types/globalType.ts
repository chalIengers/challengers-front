import { SerializedStyles } from '@emotion/react';
import React, { ChangeEvent, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// Global Style
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

// Main Page

// Project Page
export interface ProjectBoxProps {
  id: number;
  projectName: string;
  projectDescription: string;
  imageUrl: string;
  projectCategory: string;
  belongedClubName: string;
}

export interface SortType {
  service: string;
  stack: string[];
  sort: string;
}
export interface SelectBoxDropBoxProps {
  options?: string[];
  value: 'service' | 'sort' | 'stack';
  sortType: SortType;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}
export interface SelectedBoxProps extends ContainerType {
  value: 'service' | 'sort' | 'stack';
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showOptions: boolean;
}
export interface SelectBoxContainerProps {
  children: React.ReactNode;
  showOptions: boolean;
}
export interface ReturnStackProps {
  stack: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface TechStacksModalProps {
  value: string;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

// Detail Page

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

// MyPage

// Modal
export interface RegisterModalInputProps {
  register: UseFormRegisterReturn;
  type?: string;
  placeHolder?: string;
}

export interface TimerBlockProps {
  remainingTime: number;
  handleReSend: () => void;
}
//
export interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
  background?: string;
  customStyle?: any;
}
export type T = string | number;

export interface SelectBoxProps2 {
  options: { value: T; label: string }[];
  value: T;
  onChange: any;
  background?: string;
  customStyle?: any;
}

export interface imgBoxType {
  imgSrc?: string;
}

export interface ButtonBoxProps {
  text: string | undefined;
  type: 'large' | 'small' | 'modal' | 'modalSmall' | 'very_small' | 'large_modal' | 'custom';
  cancel?: boolean;
  onClick?: () => void;
  submit?: boolean;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface BannerProps {
  large?: boolean;
}

export interface TextBoxProps extends ContainerType {
  margin?: string;
}

export interface ClubComponentProps {
  id?: number | string;
  name: string;
  logo: string;
}
export interface MyClubDataType extends ClubComponentProps {
  managerEmail: string;
  manager: boolean;
}

export interface ClubBoxProps extends ClubComponentProps {
  text: string;
  onClick?: any;
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
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

export interface TagListType extends ContainerType {
  small?: boolean;
}

export interface LinkToProps extends ContainerType {
  to: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  role: string;
}

interface Link {
  name: string;
  linkUrl: string;
}
export interface Stack {
  name: string;
}
export interface Crews {
  name: string;
  position: string;
  role: string;
}

export interface ProjectInfo {
  belongedClubId: number;
  imageUrl: string;
  projectCategory: string;
  projectCrew: Crews[];
  projectDescription: string;
  projectDetail: string;
  projectLink: Link[];
  projectName: string;
  projectPeriod: string;
  status: String;
  projectTechStack: Stack[];
}
export const initialCrews: Crews = {
  name: '',
  position: '',
  role: '',
};

export const initialStack: Stack = {
  name: '',
};
export const initialLink: Link = {
  name: '',
  linkUrl: '',
};
export const initialProjectData: ProjectInfo = {
  belongedClubId: 1,
  imageUrl: '',
  projectCategory: '',
  projectCrew: [{ ...initialCrews }],
  projectDescription: '',
  projectDetail: '',
  projectLink: [{ ...initialLink }],
  projectName: '',
  projectPeriod: '',
  status: '',
  projectTechStack: [{ ...initialStack }],
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

export interface setImgFormDataType {
  setImgFormData: React.Dispatch<React.SetStateAction<File | undefined>>;
}
export interface StackTagInputProps {
  onAddStackTag: (tag: string) => void;
  stackTags: string[];
}

export interface StackInputProps {
  onAddStackTag: (tag: string) => void;
}
