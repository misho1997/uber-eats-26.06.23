import { View, Text } from "react-native";
import React from "react";
import BrowseCard from "../atoms/BrowseCard";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import * as ROUTES from "../../constants/routes";

const Container = styled(Screen)`
  display: flex;
`;

const TopContainer = styled.ScrollView``;

const Title = styled.Text`
  font-size: 25px;
  margin-left: 40px;
`;

const Category = styled.ImageBackground`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 40px;
`;

const Title2 = styled.Text`
  font-size: 30px;
  margin-right: 150px;
`;

const Browse = ({ navigation }) => {
  const browselist = [
    {
      id: 0,
      imgUrl: require("../images/browse/Category.png"),
      title: "breakfast",
    },
    {
      id: 1,
      imgUrl: require("../images/browse/CategoryImage-2.png"),
      title: "deals",
      handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN),
    },
    {
      id: 2,
      imgUrl: require("../images/browse/CategoryImage-18.png"),
      title: "burger",
    },
    {
      id: 3,
      imgUrl: require("../images/browse/CategoryImage-3.png"),
      title: "Restaurant Rewards",
    },
    // {
    //   id: 4,
    //   imgUrl: require("../images/browse/CategoryImage-5.png"),
    //   title: "Best overall",
    // },
  ];

  const browse = [
    {
      id: 5,
      imgUrl: require("../images/browse/CategoryImage-7.png"),
      title: "Mexican",
    },
    {
      id: 6,
      imgUrl: require("../images/browse/CategoryImage-6.png"),
      title: "Fast Food",
    },
    {
      id: 7,
      imgUrl: require("../images/browse/CategoryImage-7.png"),
      title: "Healthy",
    },
    {
      id: 8,
      imgUrl: require("../images/browse/CategoryImage-8.png"),
      title: "Pizza",
    },
    {
      id: 9,
      imgUrl: require("../images/browse/CategoryImage-9.png"),
      title: "Asian",
    },
    {
      id: 10,
      imgUrl: require("../images/browse/CategoryImage-10.png"),
      title: "Bakery",
    },
    {
      id: 11,
      imgUrl: require("../images/browse/CategoryImage-11.png"),
      title: "Sandwich",
    },

    {
      id: 12,
      imgUrl: require("../images/browse/CategoryImage-13.png"),
      title: "breakfast",
    },
    {
      id: 13,
      imgUrl: require("../images/browse/CategoryImage-14.png"),
      title: "breakfast",
    },
    {
      id: 14,
      imgUrl: require("../images/browse/CategoryImage-15.png"),
      title: "breakfast",
    },
    {
      id: 15,
      imgUrl: require("../images/browse/CategoryImage-16.png"),
      title: "breakfast",
    },
    {
      id: 16,
      imgUrl: require("../images/browse/CategoryImage-19.png"),
      title: "Juice & Smoothies",
    },
    {
      id: 17,
      imgUrl: require("../images/browse/CategoryImage-7.png"),
      title: "Bubble Tea",
    },
    {
      id: 18,
      imgUrl: require("../images/browse/CategoryImage-18.png"),
      title: "burger",
    },
    {
      id: 19,
      imgUrl: require("../images/browse/CategoryImage-12.png"),
      title: "Sushi",
    },
    {
      id: 18,
      imgUrl: require("../images/browse/CategoryImage-18.png"),
      title: "burger",
    },
  ];

  const Images = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 40px;
  `;

  return (
    <TopContainer>
      <Title>Top Category</Title>
      <Container>
        <Images>
          {browselist.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
                onPress={item.handlePress}
              />
            );
          })}
        </Images>

        <Title2>all categories</Title2>
        <Category>
          {browse.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
              />
            );
          })}
        </Category>
      </Container>
    </TopContainer>
  );
};

export default Browse;
