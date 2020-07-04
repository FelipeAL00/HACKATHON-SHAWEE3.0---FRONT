import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

function Location() {
  return <View />;
}

navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={20} color={tintColor} />
  ),
};

export default Location;
