import React from 'react';
import styled from 'styled-components';

export default function Counter({
  guestNumber,
  onIncreaseCount,
  onDecreaseCount,
  updateGuestNumber,
  cancleGuestNumber,
}) {
  return (
    <CounterWrap>
      <Content>
        <CounterTextBox>
          <CounterTextAdult>성인</CounterTextAdult>
          <CounterTextAge>만 13세 이상</CounterTextAge>
        </CounterTextBox>
        <CounterBox>
          <DecreaseButton onClick={() => onDecreaseCount()}>-</DecreaseButton>
          <CountNumber value={guestNumber} readOnly />
          <IncreaseButton onClick={() => onIncreaseCount()}>+</IncreaseButton>
        </CounterBox>
      </Content>
      <ButtonBox>
        <CancleButton onClick={() => cancleGuestNumber(`guest=1`)}>
          지우기
        </CancleButton>
        <ConfirmButton
          onClick={() => updateGuestNumber(`guest=${guestNumber}`)}
        >
          저장
        </ConfirmButton>
      </ButtonBox>
    </CounterWrap>
  );
}
const CounterWrap = styled.div`
  width: 400px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px;
`;

const CounterTextBox = styled.div`
  line-height: 20px;
`;

const CounterTextAdult = styled.div`
  font-size: 16px;
`;

const CounterTextAge = styled.div`
  font-size: 14px;
  color: gray;
`;

const CounterBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IncreaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: inherit;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  padding: 10px;
  :hover {
    border: 2px solid black;
  }
`;

const DecreaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: inherit;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  padding: 10px;
  :hover {
    border: 2px solid black;
  }
`;

const CountNumber = styled.input`
  width: 30px;
  border: none;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;
  border-top: 1px solid rgb(240, 240, 240);
`;

const CancleButton = styled.button`
  color: black;
  font-size: 15px;
  background: inherit;
  border: none;
  text-decoration: underline;
  :hover {
    background-color: rgb(240, 240, 240);
`;

const ConfirmButton = styled.button`
  color: white;
  background: black;
  border-radius: 10px;
  padding: 7px 15px;
`;
