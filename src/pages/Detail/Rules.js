import styled from 'styled-components';
import time from './time.png';

function Rules({ house_rules }) {
  return (
    <>
      {house_rules &&
        house_rules.map(rule => {
          const { room_rules, rules_icon_url } = rule;
          return (
            <CheckTime>
              <img alt={room_rules} src={rules_icon_url} />
              <p>{room_rules} </p>
            </CheckTime>
          );
        })}
    </>
  );
}
export default Rules;

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
