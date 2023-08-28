import { SerializedStyles } from '@emotion/react';
import React, { ChangeEvent, ReactNode } from 'react';

export interface ContainerType {
  children: ReactNode;
}

export interface StyleType {
  style: SerializedStyles;
}

export interface StyleContainerType {
  children: ReactNode;
  style?: SerializedStyles;
}

export interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: any;
  background?: string;
}

export interface ProjectBoxProps {
  title: string;
  content: string;
  tags: string[];
}

export interface NavItemProps extends ContainerType {
  to: string;
}

export interface imgBoxType {
  imgSrc?: string;
}

export interface ButtonBoxProps {
  text: string | undefined;
  type: 'large' | 'small' | 'modal' | 'very_small' | 'auto';
  cancel?: boolean;
  onClick?: () => void;
}

export interface BannerProps {
  large?: boolean;
}

export interface TextBoxProps extends ContainerType {
  margin?: string;
}

export interface ClubComponentProps {
  name: string;
  clubImg: string;
}

export interface ClubBoxProps extends ClubComponentProps {
  text: string;
  key: number;
  showToast?: boolean;
  onClick(): void;
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
  type: 'large' | 'small';
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
  projects: Project[];
}

export interface TextInputBoxType {
  type: 'header1' | 'body2' | 'body1' | 'border';
  text?: string;
  size?: number;
  max?: number;
  inputType?: string;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface TagListType extends ContainerType {
  small?: boolean;
}

export interface LinkToProps extends ContainerType {
  to: string;
}
