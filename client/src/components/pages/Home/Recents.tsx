import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "variables";
import { fakeAlbums } from "mocks";
import { RecentViews } from "components/shared/recent";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreenRecents = () => {
  return (
    <LinearGradient
      style={styles.wrapper}
      start={{ x: 1, y: 0.8 }}
      end={{ x: 0.85, y: -0.2 }}
      colors={[colors.bg, colors.bg, colors.bg, "#f97316" + "80"]}
    >
      <RecentViews recentItems={fakeAlbums[0].albums} />
    </LinearGradient>
  );
};

export default HomeScreenRecents;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  text: {
    color: colors.secondary,
    margin: 10,
    textAlign: "center",
  },
});
