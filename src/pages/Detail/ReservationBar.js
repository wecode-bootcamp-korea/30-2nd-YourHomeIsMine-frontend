import { useState } from 'react';
import StarReview from './StarReview';
import Modal from './Modal';
import styled from 'styled-components';
import theme from '../../styles/theme';
import medal from './medal.png';

function ReservationBar({ price, host, takeStartDate }) {
  const [openModal, setOpenModal] = useState(false);
  const [checkinDate, setCheckinDate] = useState('날짜 추가');
  const [checkoutDate, setCheckoutDate] = useState('날짜 추가');
  const [stayCount, setStayCount] = useState(1);
  const [guestNumber, setGuestNumber] = useState(1);

  // 날짜 수 가져오기
  const toStayCount = el => {
    setStayCount(el);
  };
  // checkin input값 가져오기
  const toCheckinPut = el => {
    setCheckinDate(el);
  };
  // checkout input값 가져오기
  const toCheckOut = el => {
    setCheckoutDate(el);
  };

  const ReservationSuccess = () => {
    alert('예약이 완료되었습니다.');
  };

  return (
    <>
      <Reservation>
        <DayPerPrice>
          <div>
            <strong>₩{Number(price).toLocaleString()}</strong> <span>/ 박</span>
          </div>
          <ul>
            <StarReview />
          </ul>
        </DayPerPrice>
        <GuestSetting>
          <DayInput>
            <CheckInput check="in">
              <p>체크인</p>
              <input
                placeholder="날짜 추가"
                value={checkinDate}
                type="text"
                setCheckinDate={setCheckinDate}
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            </CheckInput>
            {openModal && (
              <Modal
                toStayCount={toStayCount}
                checkinDate={checkinDate}
                setOpenModal={setOpenModal}
                toCheckinPut={toCheckinPut}
                toCheckOut={toCheckOut}
                setCheckinDate={setCheckinDate}
                takeStartDate={takeStartDate}
              />
            )}
            <CheckInput check="out">
              <p>체크아웃</p>
              <input placeholder="날짜 추가" value={checkoutDate} type="text" />
            </CheckInput>
          </DayInput>

          <CheckGuest>
            <p>인원</p>
            <input type="text" placeholder={`게스트 ${guestNumber}명`} />
          </CheckGuest>
          <ReservationButton onClick={ReservationSuccess}>
            예약 하기
          </ReservationButton>
        </GuestSetting>
        <TotalPrice>
          <h3>총 합계</h3>
          <h3>₩{Number(price * stayCount).toLocaleString()}</h3>
        </TotalPrice>
      </Reservation>

      <RecommentBar>
        <div>
          <strong>흔치 않은 기회입니다.</strong> {host}님의 <br />
          에어비앤비 숙소는 보통 예약이 가득 차 <br />
          있습니다.
        </div>
        <img alt="superHost" src={medal} />
      </RecommentBar>
    </>
  );
}

export default ReservationBar;

const Reservation = styled.div`
  padding: 24px;
  width: 357px;
  height: 330px;
  border: ${theme.borderColor};
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const DayPerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  strong {
    font-size: 22px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.nonActiveColor};
  }

  ul {
    display: flex;
  }
`;

const GuestSetting = styled.div``;

const CheckInput = styled.div`
  position: relative;
  margin: 0;
  padding: 26px 12px 10px;
  width: 153px;
  height: 56px;
  border: 1px solid rgb(113, 113, 113);
  border-top-left-radius: ${props => (props.check === 'in' ? '8px' : '')};
  border-top-right-radius: ${props => (props.check === 'out' ? '8px' : '')};
  border-bottom: none;

  :nth-child(2) {
    border-left: none;
  }

  p {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(34, 34, 34);
  }

  input {
    width: 98%;
    border-style: none;
  }
`;

const DayInput = styled.div`
  display: flex;
`;

const CheckGuest = styled.div`
  position: relative;
  width: 306px;
  height: 56px;
  border: 1px solid rgb(113, 113, 113);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;

  p {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(34, 34, 34);
  }

  input {
    margin-top: 10px;
    padding: 24px 155px 0 12px;
    all: outline;
    border: none;

    background-color: white;
    color: ${theme.activeColor};
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 16px;
    height: 16px;
  }
`;

const ReservationButton = styled.button`
  margin: 18px 0;
  width: 100%;
  height: 48px;
  border: none;
  background-color: ${theme.pointColor};
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;

  &:hover {
    background-color: black;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  font-size: 18px;
  font-weight: 500;
  border-top: ${theme.borderColor};
`;

const RecommentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding: 24px;
  width: 357px;
  height: 110px;
  border-radius: 14px;
  border: ${theme.borderColor};
  font-size: 16px;
  line-height: 1.3;

  strong {
    font-weight: 600;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
