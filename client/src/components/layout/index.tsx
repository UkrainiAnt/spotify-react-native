import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Tabs } from "./tabs";
import { colors } from "variables";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <View style={styles.wrapper}>
      {children}
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
