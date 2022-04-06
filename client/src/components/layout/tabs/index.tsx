import { StyleSheet } from "react-native";
import React from "react";
import { default as fakeTabs } from "./fakeTabs";
import { SingleTab } from ".";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "variables";

export const Tabs = () => {
  const tabsComponents = fakeTabs.map((tab) => (
    <SingleTab key={tab.to} tab={tab} />
  ));
  return (
    <LinearGradient
      colors={["#00000000", "#00000060", "#00000070", "#000"]}
      style={styles.wrapper}
    >
      {tabsComponents}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
});

export { default as SingleTab } from "./SingleTab";
