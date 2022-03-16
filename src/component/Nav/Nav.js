import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();

  function goToMain() {
    navigate('/main');
  }

  return (
    <nav className="nav">
      <div className="logo">
        <h2>네집내집</h2>
      </div>
      <div className="navBar">
        <div className="location">
          <div className="locationWrapper">
            <div className="locationInner">
              <div className="locator">
                <div className="locatorWrapper">
                  위치
                  <input
                    className="locatorInput"
                    type="text"
                    placeholder="어디로 여행가세요?"
                    name="name"
                  />
                  <button className="locatorFlexibleBigBtn">
                    언제 어디로든 떠나는 여행
                    <button className="locatorFlexibleSmallBtn">
                      유연한 검색
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkIn">
          <div className="checkInWrapper">
            체크인
            <div className="checkInInner">
              <input
                className="checkInInput"
                type="text"
                placeholder="체크인"
                name="name"
              />
            </div>
          </div>
        </div>
        <div className="checkOut">
          <div className="checkOutWrapper">
            체크아웃
            <div className="checkOutInner">
              <input
                className="checkOutInput"
                type="text"
                placeholder="체크아웃"
                name="name"
              />
            </div>
          </div>
        </div>
        <div className="guest">
          <div className="guestWrapper">
            <div className="guestInner">
              <div className="addGuests">
                <div className="addGuestsWrapper">
                  인원
                  <input
                    className="addGuestsInput"
                    type="text"
                    placeholder="인원추가"
                    name="name"
                  />
                </div>
              </div>
              <div className="search">
                <button
                  className="searchBtn"
                  type="button"
                  placeholder="검색"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="kakaoLoginBtn">
          <div className="kakaoLoginBtnWrapper" />
          <input
            className="kakaoLoginBtn"
            type="button"
            id="name"
            placeholder="검색"
            value="🏠"
            onClick={goToMain}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
