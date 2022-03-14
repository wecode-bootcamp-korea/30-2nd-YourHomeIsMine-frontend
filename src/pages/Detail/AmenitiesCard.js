import styled from 'styled-components';

function AmenitiesCard({ key, name, icon }) {
  return (
    <AmenitiesItem key={key}>
      <AmenitiyIcon alt={name} src={icon} />
      <AmenitiyName>{name}</AmenitiyName>
    </AmenitiesItem>
  );
}
//

export default AmenitiesCard;

const AmenitiesItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-bottom: 16px;
`;

const AmenitiyIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const AmenitiyName = styled.p`
  margin-top: 4px;
  font-size: 18px;
`;
