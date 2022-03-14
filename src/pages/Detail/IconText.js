import styled from 'styled-components';

function IconText({ item }) {
  const { feature, images } = item;

  return (
    <HouseIconText>
      <Icon alt={feature} src={images} />
      <Text>{feature}</Text>
    </HouseIconText>
  );
}

export default IconText;

const HouseIconText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;
