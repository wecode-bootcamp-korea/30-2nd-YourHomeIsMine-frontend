import styled from 'styled-components';
import Calender from './Calender';
function Modal({
  setOpenModal,
  setCheckinDate,
  checkinDate,
  toCheckinPut,
  toCheckOut,
  takeStartDate,
  toStayCount,
}) {
  return (
    <Up>
      <Calender
        toStayCount={toStayCount}
        setOpenModal={setOpenModal}
        toCheckinPut={toCheckinPut}
        setCheckinDate={setCheckinDate}
        toCheckOut={toCheckOut}
        takeStartDate={takeStartDate}
      />
      <Close onClick={() => setOpenModal(false)}>X</Close>
    </Up>
  );
}

export default Modal;

const Up = styled.div`
  position: absolute;
  left: -262px;
  z-index: 100;
  margin: 0;
  border-radius: 12px;
`;

const Close = styled.button`
  position: absolute;
  top: 4px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: white;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;
