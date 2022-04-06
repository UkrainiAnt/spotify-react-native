import { View } from "react-native";
import React from "react";
import { HomeScreenRecents, Lente } from "./";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreenContent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <HomeScreenRecents />
      <Lente />
    </ScrollView>
  );
};

export default HomeScreenContent;
