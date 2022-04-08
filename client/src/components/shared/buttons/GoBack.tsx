import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "variables";

interface GoBackProps {
  isAbsolute: boolean;
}

const GoBack: React.FC<GoBackProps> = (props) => {
  const { isAbsolute = false } = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={isAbsolute ? styles.wrapper : styles.nonAbsoluteWrapper}
    >
      <Ionicons
        name="ios-chevron-back-outline"
        size={30}
        color={colors.white}
      />
      <Text style={styles.back}></Text>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "center",
  },
  nonAbsoluteWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
    color: colors.white,
  },
});
