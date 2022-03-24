import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function Category({ updateCategory }) {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch(`/data/houseType.json`)
      .then(res => res.json())
      .then(data => setHouse(data.houseList));
  }, []);

  return (
    <NavButtonBox>
      {house.map(item => {
        return (
          <HouseTypeButtonBox key="id">
            <HouseTypeButton onClick={() => updateCategory(item.value)}>
              {item.houseType}
            </HouseTypeButton>
          </HouseTypeButtonBox>
        );
      })}
    </NavButtonBox>
  );
}

const NavButtonBox = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px;
  font-family: 'Noto Sans KR';
`;

const HouseTypeButtonBox = styled.li``;

const HouseTypeButton = styled.button`
  border: none;
  padding: 10px;
  background-color: inherit;
  cursor: pointer;
  color: gray;
  font-size: 16px;
  display: inline-block;
  position: relative;
  :after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: black;
    transition: all 0.5s;
  }
  :before {
    content: '';
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: black;
    transition: all 0.5s;
  }
  :hover {
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    color: black;
  }
  :hover:after {
    width: 50%;
  }
  :hover:before {
    width: 50%;
  }
  margin: 0 5px;
`;
