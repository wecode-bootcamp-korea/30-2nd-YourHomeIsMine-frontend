import React from 'react';
import styled from 'styled-components';

export default function Date({
  updateDay,
  checkIn,
  checkOut,
  getCheckIn,
  getCheckOut,
}) {
  //   console.log(schedule_date);
  return (
    <DateContainer>
      <Period>
        <PeriodText>숙박 기간을 입력하세요.</PeriodText>
        <CheckinBox>
          <CheckinText>Check-In </CheckinText>
          <CheckinInput onChange={getCheckIn} placeholder="ex) 2022-01-01" />
        </CheckinBox>
        <CheckoutBox>
          <CheckoutText>Check-Out </CheckoutText>
          <CheckOutput onChange={getCheckOut} placeholder="ex) 2022-01-01" />
        </CheckoutBox>
      </Period>
      <ButtonBox>
        <ConfirmButton
          onClick={() => updateDay(`check_in=${checkIn}&check_out=${checkOut}`)}
          // onClick={() => updateDay(`checkin=${checkIn}`)}
        >
          저장
        </ConfirmButton>
      </ButtonBox>
    </DateContainer>
  );
}

const DateContainer = styled.div`
  width: 400px;
`;

const Period = styled.div``;

const PeriodText = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 30px 0;
`;

const CheckinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckinText = styled.div``;

const CheckinInput = styled.input`
  width: 150px;
  height: 30px;
  border: solid 2px black;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
`;

const CheckoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutText = styled.div``;

const CheckOutput = styled.input`
  width: 150px;
  height: 30px;
  border: solid 2px black;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
`;

const ButtonBox = styled.button`
  background: inherit;
  border: none;
  padding: 10px 20px 20px 20px;
`;

const ConfirmButton = styled.button`
  color: white;
  background: black;
  border-radius: 10px;
  padding: 7px 15px;
`;
