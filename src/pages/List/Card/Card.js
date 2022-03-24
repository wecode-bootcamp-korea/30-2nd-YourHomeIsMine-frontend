import React from 'react';
import styled from 'styled-components';

function Card({
  room_name,
  price,
  address,
  images,
  category,
  guest,
  id,
  handleClick,
  schedule,
}) {
  return (
    <HouseInner onClick={() => handleClick(id)}>
      <HouseImage src={images} />
      <HouseContentWrapTop>
        <HouseName>{room_name}</HouseName>
        <HousePrice>₩ {Number(price).toLocaleString()} / 박</HousePrice>
      </HouseContentWrapTop>
      <HouseContentWrapBottom>
        <Address>{address}</Address>
        <Period>{category}</Period>
        <Schedule>{schedule}</Schedule>
      </HouseContentWrapBottom>
    </HouseInner>
  );
}

const HouseInner = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const HouseImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const HouseContentWrapTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  font-weight: 600;
  font-size: 15px;
`;

const HouseName = styled.div``;

const HousePrice = styled.div`
  margin: 0;
  padding: 0;
`;

const HouseContentWrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  word-break: keep-all;
  font-size: 15px;
  color: gray;
`;

const Address = styled.div`
  margin: 0;
  padding: 0;
`;

const Period = styled.div`
  margin: 0;
  padding: 0;
`;

const Schedule = styled.div`
  margin: 0;
  padding: 0;
`;
export default Card;
