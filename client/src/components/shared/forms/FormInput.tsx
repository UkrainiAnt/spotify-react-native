import { StyleSheet } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import { colors } from "variables";

export const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

interface FormInputProps {
  value: string;
  error: string;
  onChangeText: (val: string) => void;
  Icon: any;
  iconName: string;
  placeholder?: string;
  iconColor?: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const {
    error,
    onChangeText,
    value,
    Icon,
    iconName,
    placeholder,
    iconColor = "#ccc",
  } = props;

  return (
    <Input
      placeholder={placeholder}
      style={styles.input}
      inputStyle={{ color: colors.text }}
      inputContainerStyle={{
        ...styles.inputContainerStyle,
        ...isErrorStyle(!!error),
      }}
      value={value}
      onChangeText={onChangeText}
      errorMessage={error ? error : ""}
      rightIcon={
        <Icon
          style={isErrorStyle(!!error)}
          name={iconName}
          size={24}
          color={iconColor}
        />
      }
    />
  );
};

export default FormInput;

export const styles = StyleSheet.create({
  input: {
    width: 320,
    borderBottomColor: "transparent",
  },
  inputContainerStyle: {
    borderRadius: 10,
    paddingHorizontal: 12,
    padding: 6,
    backgroundColor: colors.form,
    borderColor: "transparent",
    borderBottomWidth: 2,
    color: colors.text,
  },
});
