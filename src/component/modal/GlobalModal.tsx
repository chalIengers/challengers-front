import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal } from '../../store/slice/modalSlice';
import {
  ChangePassword,
  CommentBlackModal,
  CommentModal,
  CreateClubModal,
  ModalContainer,
  Overlay,
  RegisterModal,
  RegisterSuccessModal,
  UnRegisterModal,
  UnRegisterWarningModal,
} from './component';

const MODAL_TYPES = {
  CreateClubModal: 'CreateClubModal',
  RegisterModal: 'RegisterModal',
  RegisterSuccessModal: 'RegisterSuccessModal',
  CommentModal: 'CommentModal',
  ChangePassword: 'ChangePassword',
  CommentBlackModal: 'CommentBlackModal',
  UnRegisterWarningModal: 'UnRegisterWarningModal',
  UnRegisterModal: 'UnRegisterModal',
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
  {
    type: MODAL_TYPES.ChangePassword,
    component: <ChangePassword />,
  },
  {
    type: MODAL_TYPES.CommentBlackModal,
    component: <CommentBlackModal />,
  },
  {
    type: MODAL_TYPES.UnRegisterWarningModal,
    component: <UnRegisterWarningModal />,
  },
  {
    type: MODAL_TYPES.UnRegisterModal,
    component: <UnRegisterModal />,
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
