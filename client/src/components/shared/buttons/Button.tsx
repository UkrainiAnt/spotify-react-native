import { StyleSheet, View } from "react-native";
import React from "react";
import { Button as BButton } from "react-native-elements";
import { ReactElement } from "react";

interface ButtonProps {
  onPress: () => void;
  text: string | ReactElement<any, any>;
  bgColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number | string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    text,
    bgColor = "#e47911",
    disabled = false,
    isLoading = false,
    width = "100%",
  } = props;
  return (
    <View style={{ overflow: "hidden", borderRadius: 7, margin: 10 }}>
      <BButton
        onPress={onPress}
        disabled={disabled}
        buttonStyle={styles.wrapper(bgColor, width)}
        title={text}
        loading={isLoading}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: (bgColor: string, width: string | number) => ({
    backgroundColor: bgColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    width,
  }),
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
} as any);
