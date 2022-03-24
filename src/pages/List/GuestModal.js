import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Counter from './Counter';
import { MdClose } from 'react-icons/md';

function GuestModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  guestNumber,
  onIncreaseCount,
  onDecreaseCount,
  updateGuestNumber,
  cancleGuestNumber,
}) {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = e => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && <MdClose className="modal-close" onClick={close} />}
          <Counter
            guestNumber={guestNumber}
            onIncreaseCount={onIncreaseCount}
            onDecreaseCount={onDecreaseCount}
            updateGuestNumber={updateGuestNumber}
            cancleGuestNumber={cancleGuestNumber}
          />
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

GuestModal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 20px;
  width: 440px;
  height: 250px;
  max-width: 480px;
  top: 9%;
  transform: translateY(40%);
  transform: translateX(118%);
  margin: 0 auto;
  padding: 30px 20px;
`;

export default GuestModal;
