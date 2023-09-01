import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal } from '../../store/modalSlice';
import {
  CommentModal,
  CreateClubModal,
  ModalContainer,
  Overlay,
  RegisterModal,
  RegisterSuccessModal,
} from './component';

const MODAL_TYPES = {
  CreateClubModal: 'CreateClubModal',
  RegisterModal: 'RegisterModal',
  RegisterSuccessModal: 'RegisterSuccessModal',
  CommentModal: 'CommentModal',
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.CreateClubModal,
    component: <CreateClubModal />,
  },
  {
    type: MODAL_TYPES.RegisterModal,
    component: <RegisterModal />,
  },
  {
    type: MODAL_TYPES.RegisterSuccessModal,
    component: <RegisterSuccessModal />,
  },
  {
    type: MODAL_TYPES.CommentModal,
    component: <CommentModal />,
  },
];

const GlobalModal = () => {
  // modal type을 string 형태로 받습니다.
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal?.component;
  };

  return (
    <ModalContainer>
      <Overlay
        onClick={() => {
          dispatch(closeModal());
        }}
      />
      {renderModal()}
    </ModalContainer>
  );
};

export default GlobalModal;
