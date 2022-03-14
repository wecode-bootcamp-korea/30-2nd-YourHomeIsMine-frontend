import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function StarReview(props) {
  const { size } = props;
  const [reviewCount, setReviewCount] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch('https://6c91-211-106-114-186.ngrok.io/rooms/1/reviews')
      .then(res => res.json())
      .then(data => {
        setReviewCount(data.result);
      });
  }, []);

  const { reviews_number, star_rating } = reviewCount;

  return (
    <Evaluation>
      <Star size={size} src="./images/star.png" />
      <TotalScore size={size}>{star_rating} ·</TotalScore>
      <ReviewCount size={size}>후기 {reviews_number}개</ReviewCount>
    </Evaluation>
  );
}

export default StarReview;

const Evaluation = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  margin-bottom: 3px;
  width: ${props => (props.size === 'large' ? '22px' : '14px')};
  height: ${props => (props.size === 'large' ? '22px' : '14px')};
`;

const TotalScore = styled.p`
  margin: 0 8px;
  font-size: ${props => (props.size === 'large' ? '22px' : '14px')};
  font-weight: 700;
`;

const ReviewCount = styled.p`
  font-size: ${props => (props.size === 'large' ? '22px' : '14px')};
  font-weight: 700;
`;
