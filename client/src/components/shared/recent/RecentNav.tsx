import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecentNavActions } from "./";
import { useRouting } from "hooks";

const RecentNav = () => {
  const { navigateTo } = useRouting();

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Recently played
        </Text>
      </View>
      <RecentNavActions
        onOptionsPress={navigateTo("options")}
        onClockPress={navigateTo("history")}
        onBellPress={navigateTo("new")}
      />
    </View>
  );
};

export default RecentNav;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
