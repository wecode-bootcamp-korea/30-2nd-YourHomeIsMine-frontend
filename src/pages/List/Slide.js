import React, { Component } from 'react';
import Slider from 'react-slick';
import SlideContent from './SlideContent';
import styled from 'styled-components';

const Slide = ({ data, handleRen }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrap>
      <Slider {...settings}>
        {' '}
        {data.map(data => {
          return <SlideContent key={data} data={data} handleRen={handleRen} />;
        })}{' '}
      </Slider>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    opaicty: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;
export default Slide;
