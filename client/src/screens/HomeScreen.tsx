import { StyleSheet, View } from "react-native";
import React from "react";
import { Layout } from "components/layout";
import { HomeScreenContent } from "components/pages/Home";

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <HomeScreenContent />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24293e",
  },
});
