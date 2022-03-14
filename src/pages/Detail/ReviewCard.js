import styled from 'styled-components';
import theme from '../../styles/theme';

function ReviewCard({ reviews }) {
  return (
    <>
      {reviews?.map(item => {
        const { review_id, profile_image, contents, date, nickname } = item;
        return (
          <User key={review_id}>
            <UserProfile>
              <UserImg alt={nickname} src={profile_image} />
              <UserInfo>
                <p>{nickname}</p>
                <p>{date}</p>
              </UserInfo>
            </UserProfile>
            <UserReviw>
              <p>{contents}</p>
            </UserReviw>
          </User>
        );
      })}
    </>
  );
}

export default ReviewCard;

const User = styled.div`
  padding-right: 0 10px;
  width: 50%;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  p {
    margin: 4px 0;
    :nth-child(2) {
      font-size: 14px;
      color: ${theme.nonActiveColor};
    }
  }
`;

const UserImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 40px;
`;

const UserInfo = styled.div`
  margin-left: 12px;
`;

const UserReviw = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;
