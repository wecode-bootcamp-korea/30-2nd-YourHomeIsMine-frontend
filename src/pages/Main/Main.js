import React, { useEffect, useState } from 'react';
import './Main.scss';
import styled from 'styled-components';

function Main() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/MainContent.json')
      .then(res => res.json())
      .then(data => setCity(data));
  }, []);

  return (
    <MainContainer>
      <MainContent>
        <Comment>
          더 놀고 싶은 오늘, <br />
          집에 가기 싫을 땐?
          <br />
          네집내집에서 즐거운 시간 보내세요!
        </Comment>
      </MainContent>
      <PictureContent>
        <Comment>
          고생하셨습니다
          <br />
          선릉역 맥주 한 잔 어떠세요 🍻
        </Comment>
      </PictureContent>
      <SubTitle>설레, 니네집 갈 생각에</SubTitle>
      <CardContainer>
        {city.map(item => {
          const { name, id, url } = item;
          return (
            <CityCard key={id} url={url}>
              <CardContent>{name}</CardContent>
            </CityCard>
          );
        })}
      </CardContainer>
      <MainContent>
        <Comment>
          힘들면 쉬다가세요 <br />
          내집말고, 니집에서!
        </Comment>
      </MainContent>
    </MainContainer>
  );
}
export default Main;

const MainContainer = styled.div`
  padding: 0 80px;
  height: 85vh;
  background-color: black;
`;

const MainContent = styled.div`
  margin-top: 100px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  background-color: #fe385c;
  border-radius: 18px;
`;

const Comment = styled.h2`
  margin: 0;
  padding: 100px;
  font-family: 'Noto Sans KR';
  font-weight: 600;
  font-size: 38px;
  color: white;
  line-height: 1.3;
`;

const PictureContent = styled(MainContent)`
  margin-top: 100px;
  background-image: url('https://images.unsplash.com/photo-1552183403-41bd324b8090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
`;

const SubTitle = styled.h2`
  padding: 60px 0 40px;
  font-size: 40px;
  font-weight: 600;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const CityCard = styled.div`
  position: relative;
  width: 23%;
  height: 450px;
  padding: 20px;
  border-radius: 16px;
  object-fit: cover;
  background-image: url(${props => props.url});
`;

const CardContent = styled.h2`
  position: absolute;
  bottom: 70px;
  font-size: 32px;
  font-weight: 500;
  color: white;
`;
