import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
`;

const Title = styled.Text`
  font-size: 16px;
`;

const Icon = styled.View`
  width: 30px;
  height: 30px;
`;

const SettingCard = ({ onPress, icon, title }) => {
  return (
    <Container onPress={onPress}>
      <Icon>
        <Image source={icon} />
      </Icon>
      <Title>
        <Text>{title}</Text>
      </Title>
    </Container>
  );
};

export default SettingCard;
