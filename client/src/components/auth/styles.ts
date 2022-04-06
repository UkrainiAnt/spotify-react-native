import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "variables";

export const styles = StyleSheet.create({
  wrapper: {
    width: 320,
    marginBottom: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg,
  },

  iconStyle: {
    height: 240,
    width: "auto",
    alignSelf: "center",
  },
});
