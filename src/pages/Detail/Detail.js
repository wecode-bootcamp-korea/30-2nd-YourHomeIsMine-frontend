import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AmenitiesCard from './AmenitiesCard';
import ReservationBar from './ReservationBar';
import ReviewCard from './ReviewCard';
import StarReview from './StarReview';
import Rules from './Rules';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import theme from '../../styles/theme';

function Detail() {
  const [detailList, setDetailList] = useState({});
  const [reviewPoint, setReviewPoint] = useState({});
  const [freeCancel, setFreeCancel] = useState('체크인 기준 5');
  const params = useParams();

  //mock data => 'http://localhost:3000/data/DetailData.json'
  //server url => 'https://a937-211-106-114-186.ngrok.io/rooms/1'
  // `https://a937-211-106-114-186.ngrok.io/rooms/${params.id}`
  useEffect(() => {
    fetch('https://a937-211-106-114-186.ngrok.io/rooms/1')
      .then(res => res.json())
      .then(data => {
        setDetailList(data.message);
      });
  }, []);

  const {
    latitute,
    longitute,
    name,
    address,
    baths,
    beds,
    room_images_url,
    house_rules,
    guests,
    description,
    host,
    host_image,
    category,
    room_amenities,
    check_in_time,
    check_out_time,
  } = detailList;

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `         
      function initTmap() {
        //지도
        var map = new Tmapv2.Map('map_div', {
          center: new Tmapv2.LatLng(37.4898,127.0438),// 지도 초기 좌표
        });

        //마커
        var marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(37.4898,127.0438), //Marker의 중심좌표 설정.
          icon: "http://tmapapi.sktelecom.com/resources/images/common/pin_car.png",
          map: map 
        }); 

        //원
        var circle = new Tmapv2.Circle({
            center: new Tmapv2.LatLng(37.4898,127.0438), // 중심좌표
            radius: 12, // 원의 반지름. 크기설정
            strokeColor: "#DC1663", // 테두리 색상
            fillColor: "#DC1663", // 원 내부 색상
            map: map // 지도 객체
          });
      }
      initTmap();
        
  `;
    script.type = 'text/javascript';
    script.async = 'async';
    document.head.appendChild(script);
  }, [latitute, longitute]);

  //mock data => 'http://localhost:3000/data/UserReview.json'
  //server url => 'https://e965-211-106-114-186.ngrok.io/rooms/1/reviews'
  // `https://35a8-211-106-114-186.ngrok.io/rooms/${params.id}/reviews`
  useEffect(() => {
    fetch('https://6c91-211-106-114-186.ngrok.io/rooms/1/reviews')
      .then(res => res.json())
      .then(data => {
        setReviewPoint(data.result);
      });
  }, []);

  const {
    reviews_number,
    accuracy,
    communication,
    cleanliness,
    location,
    check_in_rating,
    cost_performance,
    reviews,
  } = reviewPoint;

  const takeStartDate = el => {
    setFreeCancel(el);
  };

  return (
    <DetailContainer>
      {
        (detailList.name,
        detailList.latitute && (
          <>
            <HouseTitle>
              <HouseName>{name}</HouseName>
              <HouseSubInfo>
                <ul>
                  <StarReview />
                  <Icon size="mini" src="./images/medal.png" />
                  <li>슈퍼호스트</li>
                  <li>{address}</li>
                </ul>
                <ShareBox>
                  <ShareSaveButton>
                    <img alt="공유" src="./images/send.png" />
                    <span>공유하기</span>
                  </ShareSaveButton>
                  <ShareSaveButton>
                    <img alt="저장" src="./images/love.png" />
                    <span>저장</span>
                  </ShareSaveButton>
                </ShareBox>
              </HouseSubInfo>
            </HouseTitle>
            <HousePhotoBox>
              <LeftBigImg
                alt="thumnail_img"
                className="leftBigImg"
                src={room_images_url[0]}
              />

              <SmallImgBox>
                <SmallImg alt="mainImg" src={room_images_url[1]} />
                <SmallImg alt="mainImg" src={room_images_url[2]} />
              </SmallImgBox>
              <SmallImgBox>
                <SmallImg alt="mainImg" border="top" src={room_images_url[3]} />
                <SmallImg
                  alt="mainImg"
                  border="bottom"
                  src={room_images_url[3]}
                />
              </SmallImgBox>
            </HousePhotoBox>

            <HouseMainContent>
              <MainLeft>
                <HouseIntro>
                  <div>
                    <SubTitle>
                      {host}님이 호스팅하는 {category}
                    </SubTitle>
                    <span>
                      최대 인원 {guests}명 · 침대 {beds}개 ·욕실 {baths}개
                    </span>
                  </div>
                  <HostImg
                    alt="hostImg"
                    className="houseHostImg"
                    src={host_image}
                  />
                </HouseIntro>
                <HouseIntroIconText>
                  <HouseIconText>
                    <Icon alt="selfCheckin" src="./images/enter.png" />
                    <Text>셀프체크인</Text>
                  </HouseIconText>

                  <HouseIconText>
                    <Icon alt="selfCheckin" src="./images/medal.png" />
                    <Text>{host}님은 슈퍼 호스트입니다.</Text>
                  </HouseIconText>
                  <HouseIconText>
                    <Icon alt="selfCheckin" src="./images/calendar.png" />
                    <Text>
                      {freeCancel}일 전까지 무료로 취소하실 수 있습니다.
                    </Text>
                  </HouseIconText>
                </HouseIntroIconText>
                <HouseIntroText>
                  <p>{description}</p>
                </HouseIntroText>

                <Amenities>
                  <SubTitle>숙소 편의시설</SubTitle>
                  <div className="column">
                    {room_amenities &&
                      room_amenities.map(amenity => {
                        return (
                          <AmenitiesCard
                            key={amenity.amenity_id}
                            name={amenity.amenity_name}
                            icon={amenity.amenity_icon_url}
                          />
                        );
                      })}
                  </div>
                </Amenities>
              </MainLeft>
              <MainRightSticky>
                <ReservationBar
                  price={detailList.price}
                  takeStartDate={takeStartDate}
                  host={host}
                />
              </MainRightSticky>
            </HouseMainContent>
            <ReviewBox>
              <ReviewTitle>
                <StarReview size="large" />
              </ReviewTitle>

              {/* <ReviewPart>
                {reviewPoint.map(review => {
                  return <Review key={review.id} reviewPoint={reviewPoint} />;
                })}
              </ReviewPart> */}
              <UsersReviewBox>
                <OneLineReview>
                  <ReviewInfo>
                    <h3>청결도</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{cleanliness}</p>
                    </div>
                  </ReviewInfo>
                  <ReviewInfo>
                    <h3>의사소통</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{communication}</p>
                    </div>
                  </ReviewInfo>
                  <ReviewInfo>
                    <h3>체크인</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{check_in_rating}</p>
                    </div>
                  </ReviewInfo>
                  <ReviewInfo>
                    <h3>정확성</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{accuracy}</p>
                    </div>
                  </ReviewInfo>
                  <ReviewInfo>
                    <h3>위치</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{location}</p>
                    </div>
                  </ReviewInfo>
                  <ReviewInfo>
                    <h3>가격 대비 만족도</h3>
                    <div className="score">
                      <div className="scoreBar">
                        <span />
                      </div>
                      <p>{cost_performance}</p>
                    </div>
                  </ReviewInfo>
                </OneLineReview>
                <RealReview>
                  <ReviewCard reviews={reviews} />
                </RealReview>
              </UsersReviewBox>
              <ReviewMoreButton>
                후기{reviews_number}개 모두 보기
              </ReviewMoreButton>
            </ReviewBox>
            <HostingPlace>
              <SubTitle>호스팅 지역</SubTitle>
              <Map id="map_div" />
            </HostingPlace>
            <HouseRules>
              <SubTitle>알아두어야 할 사항</SubTitle>
              <h3>숙소 이용규칙</h3>
              <RuleBox>
                <CheckTime>
                  <img alt="time" src="./images/time.png" />
                  <p>체크인: 오전 {check_in_time}</p>
                </CheckTime>
                <CheckTime>
                  <img alt="time" src="./images/time.png" />
                  <p>체크아웃: 오전 {check_out_time}</p>
                </CheckTime>
                <Rules house_rules={house_rules} />
              </RuleBox>
            </HouseRules>
          </>
        ))
      }
    </DetailContainer>
  );
}
export default Detail;

const DetailContainer = styled.div`
  width: 1234px;
  margin: 0 auto;
  padding: 0 80px;
`;

const HouseTitle = styled.div``;

const HouseName = styled.h1`
  margin-bottom: 8px;
  font-size: 26px;
  font-weight: 500;
`;

const HouseSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 14px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 320px;

    li {
      margin: 0 4px;
    }
  }
`;

const ShareBox = styled.div`
  display: flex;
`;

const ShareSaveButton = styled.button`
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

  img {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;

const HousePhotoBox = styled.div`
  display: flex;
  padding-top: 12px;
`;

const LeftBigImg = styled.img`
  width: 530px;
  height: 435.797px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

const SmallImgBox = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: 8px;
`;

const SmallImg = styled.img`
  width: 262px;
  height: 217.898px;
  border-top-right-radius: ${props => (props.border === 'top' ? '14px' : '')};
  border-bottom-right-radius: ${props =>
    props.border === 'bottom' ? '14px' : ''};

  :nth-child(2) {
    padding-top: 8px;
  }
`;

const HouseMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${theme.borderColor};
`;

const MainLeft = styled.div`
  width: 626.5px;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 24px;
`;

const HouseIntro = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0 24px;
  border-bottom: ${theme.borderColor};
`;

const HostImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50px;
`;

const HouseIntroIconText = styled.div`
  padding: 32px 0;
  border-bottom: ${theme.borderColor};

  p {
    font-size: 14px;
    color: ${theme.nonActiveColor};
  }
`;

const HouseIntroText = styled.div`
  padding: 32px 0;
  border-bottom: ${theme.borderColor};
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const HouseIconText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const Icon = styled.img`
  margin-right: ${props => (props.size === 'mini' ? '0px' : '16px')};
  width: ${props => (props.size === 'mini' ? '16px' : '24px')};
  height: ${props => (props.size === 'mini' ? '16px' : '24px')};
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Amenities = styled.div`
  padding: 48px 0;

  .column {
    display: flex;
    flex-wrap: wrap;
    overflow-y: hidden;
    height: 200px;
  }
  h2 {
    padding-bottom: 24px;
  }
`;

const MainRightSticky = styled.div`
  height: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
  position: sticky;
  top: 0;
`;

const ReviewBox = styled.div`
  padding: 48px 0;
  border-bottom: ${theme.borderColor};

  span {
    font-size: 22px;
  }
`;

const ReviewTitle = styled.div`
  padding-bottom: 16px;
`;

const UsersReviewBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 640px;
  overflow-y: hidden;
  margin-top: 40px;
`;

const OneLineReview = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RealReview = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 20px;
  width: 50%;
  height: 20px;

  h3 {
    font-weight: 300;
  }
  .score {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 12px;
      margin-left: 8px;
    }
  }

  .scoreBar {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 121.211px;
    height: 4px;
    background-color: #dddddd;
    border-radius: 2px;

    span {
      padding: 0;
      position: absolute;
      width: 92%;
      height: 4px;
      border-radius: 2px;
      background-color: ${theme.activeColor};
    }
  }
`;

const ReviewMoreButton = styled.button`
  padding: 13px 23px;
  width: 180px;
  height: 50px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgb(34, 34, 34);
  border-radius: 8px;
`;

const HostingPlace = styled.div`
  padding: 48px 0;
  border-bottom: ${theme.borderColor};
`;

const Map = styled.div`
  width: 100%;
  height: 480px;

  .marker {
    width: 400px;
    height: 400px;
  }
`;

const HouseRules = styled.div`
  padding: 48px 0;

  h3 {
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
  }
`;

const RuleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 160px;
`;

const CheckTime = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;
