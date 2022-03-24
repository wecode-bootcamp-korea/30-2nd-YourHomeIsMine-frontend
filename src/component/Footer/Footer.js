import React from 'react';
import styled from 'styled-components';
import { BsDot, BsTwitter, BsCameraFill } from 'react-icons/bs';
import { MdCopyright } from 'react-icons/md';
import { ImEarth } from 'react-icons/im';
import { BiWon } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { SiKakaotalk } from 'react-icons/si';

function Footer() {
  return (
    <FooterContainer>
      <LeftFooterBox>
        <MdCopyright />
        2022 니집네집,Inc <BsDot /> 개인정보 처리방침 <BsDot /> 이용약관{' '}
        <BsDot /> 사이트맵 <BsDot />
        한국의 변경된 환불 정책 <BsDot /> 회사 세부정보
      </LeftFooterBox>
      <CenterFooterBox>
        <ImEarth /> 한국어(KR)&nbsp;
        <BiWon /> KRW
      </CenterFooterBox>
      <RightFooterBox>
        <FaFacebookF />
        &nbsp;&nbsp;&nbsp; <BsTwitter />
        &nbsp;&nbsp;&nbsp; <BsCameraFill /> &nbsp;&nbsp;&nbsp;
        <SiKakaotalk />
      </RightFooterBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  padding: 35px 100px;
  border-top: 1px solid rgb(240, 240, 240);
  background: black;
  bottom: 0;
`;

const LeftFooterBox = styled.div`
  color: white;
  font-family: 'Noto Sans KR';
`;

const CenterFooterBox = styled.div`
  width: 400px;
  padding-left: 200px;
  color: white;
  font-family: 'Noto Sans KR';
`;

const RightFooterBox = styled.div`
  width: 300px;
  text-align: right;
  color: white;
`;

export default Footer;
