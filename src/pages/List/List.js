import React from 'react';
import styled from 'styled-components';
// import Slider from 'react-slick';
import Card from './Card/Card';
import GuestModal from './GuestModal';
import DateModal from './DateModal';
import Category from './Category';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import API_CONFIG from '../../config';

function List() {
  const navigate = useNavigate();
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const [guestNumber, setGuestNumber] = useState(1);
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [GuestModalVisible, setGuestModalVisible] = useState(false);
  const [DateModalVisible, setDateModalVisible] = useState(false);
  const [queryData, setQueryData] = useState({
    categoryQuery: '',
    guestNumberQuery: '',
    dayQuery: '',
  });

  const maxGuestNumber = 16;
  const minGuestNumber = 1;

  const openGuestModal = () => {
    setGuestModalVisible(true);
  };
  const closeGuestModal = () => {
    setGuestModalVisible(false);
  };

  const openDateModal = () => {
    setDateModalVisible(true);
  };

  const closeDateModal = () => {
    setDateModalVisible(false);
  };
  const getCheckIn = event => {
    const { value } = event.target;
    setCheckIn(value);
  };

  const getCheckOut = event => {
    const { value } = event.target;
    setCheckOut(value);
  };

  const onIncreaseCount = () => {
    if (guestNumber < maxGuestNumber) {
      setGuestNumber(guestNumber + 1);
    } else if (guestNumber > maxGuestNumber) {
      setGuestNumber(maxGuestNumber);
    }
  };

  const onDecreaseCount = () => {
    if (guestNumber > minGuestNumber) {
      setGuestNumber(guestNumber - 1);
    }
  };

  const updateCategory = category => {
    const newQuery = queryData;
    newQuery.categoryQuery = category;
    updateQuery(newQuery);
  };

  const updateGuestNumber = guest => {
    console.log(guest);
    const newQuery = queryData;
    newQuery.guestNumberQuery = guest;
    updateQuery(newQuery);
  };

  const cancleGuestNumber = guest => {
    const newQuery = queryData;
    newQuery.guestNumberQuery = guest;
    setGuestNumber(1);
    updateQuery(newQuery);
  };

  const updateDay = day => {
    const newQuery = queryData;
    newQuery.dayQuery = day;
    updateQuery(newQuery);
  };

  const updateQuery = newQuery => {
    navigate(
      `?${newQuery.categoryQuery}&${newQuery.guestNumberQuery}&${newQuery.dayQuery}`
    );
  };

  // const BASE_URL = 'http://10.58.0.174:8000/rooms';
  const BASE_URL = 'https://a937-211-106-114-186.ngrok.io/rooms';

  const handleClick = id => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    fetch(`${BASE_URL}${location.search}`)
      .then(res => res.json())
      .then(data => setProductList(data.results));
  }, [location.search, queryData]);
  return (
    <ListContainer>
      <InnerWrap>
        <HeadBox>
          <NavButtonBox>
            <HouseTypeButtonBox>
              <Category updateCategory={updateCategory} />
            </HouseTypeButtonBox>
            <FilterButtonBox>
              <FilterButton onClick={openDateModal}>
                언제든
                <MdKeyboardArrowDown />
              </FilterButton>
              {DateModalVisible && (
                <DateModal
                  visible={DateModalVisible}
                  closable={true}
                  maskClosable={true}
                  onClose={closeDateModal}
                  updateDay={updateDay}
                  setCheckIn={setCheckIn}
                  setCheckOut={setCheckOut}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  getCheckIn={getCheckIn}
                  getCheckOut={getCheckOut}
                />
              )}

              <FilterButton onClick={openGuestModal}>
                인원
                <MdKeyboardArrowDown />
              </FilterButton>

              {GuestModalVisible && (
                <GuestModal
                  visible={GuestModalVisible}
                  closable={true}
                  maskClosable={true}
                  onClose={closeGuestModal}
                  guestNumber={guestNumber}
                  onIncreaseCount={onIncreaseCount}
                  onDecreaseCount={onDecreaseCount}
                  updateGuestNumber={updateGuestNumber}
                  cancleGuestNumber={cancleGuestNumber}
                />
              )}
            </FilterButtonBox>
          </NavButtonBox>
        </HeadBox>
        <ContentBox>
          {productList.length && (
            <HouseListWrap>
              {productList.map(product => {
                return (
                  <Card
                    key={product.id}
                    id={product.room_id}
                    room_name={product.room_name}
                    images={product.images}
                    price={product.price}
                    address={product.address}
                    category={product.category_name}
                    guest={product.guest}
                    schedule={product.schedule}
                    schedule_date={product.schedule_date}
                    handleClick={handleClick}
                  />
                );
              })}
            </HouseListWrap>
          )}
        </ContentBox>
      </InnerWrap>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin-bottom: 400px;
`;

const InnerWrap = styled.div`
  padding: 0;
`;

const HeadBox = styled.section`
  border-top: 1px solid rgb(220, 220, 220);
`;

const NavButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 0;
`;

const HouseTypeButtonBox = styled.div`
  width: 600px;
  margin-left: 70px;
`;

const FilterButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
  width: 200px;
`;

const FilterButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid white;
  padding: 10px;
  background: white;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid rgb(220, 220, 220);
  font-family: 'Noto Sans KR';

  :hover {
    border: 2px solid black;
  }
`;

const ContentBox = styled.section`
  margin: 10px;
  padding: 5px 80px;
  border: none;
`;

const HouseListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default List;
