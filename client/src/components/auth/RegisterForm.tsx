import { View } from "react-native";
import React from "react";
import { useForm } from "hooks";
import LottieView from "lottie-react-native";
import { styles as styleSheet } from "./styles";
import { AuthPageNav } from "./";
import { FormInput } from "components/shared/forms";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "components/shared";
import { GoogleButton } from "./";
import { FieldValidator } from "helpers/FieldValidator";
import { colors } from "variables";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuthState } from "hooks";
import { RegisterPayload } from "models";

const LoginForm = () => {
  const form = useForm({
    initialValues: { email: "", password: "", name: "" },
    validationRules: {
      email: FieldValidator.isEmail,
      password: FieldValidator.isLength(8, 20),
      name: FieldValidator.isNotEmpty,
    },
    errorMessages: {
      email: "email is invalid",
      password: "password is invalid",
      name: "name in invalid",
    },
  });

  const { registerUser } = useAuthState();

  const register = () => {
    const newUser: RegisterPayload = form.values;

    if (!form.validate()) {
      return;
    }

    registerUser(newUser);
  };

  return (
    <View style={styleSheet.wrapper}>
      <LottieView
        style={styleSheet.iconStyle}
        loop={false}
        autoPlay
        speed={0.6}
        source={require("../../assets/animations/87845-hello.json")}
      />

      <FormInput
        iconColor={colors.accent}
        iconName="user"
        Icon={FontAwesome5}
        {...form.getInputProps("name")}
      />

      <FormInput
        iconName="mail"
        iconColor={colors.accent}
        Icon={Ionicons}
        {...form.getInputProps("email")}
      />

      <FormInput
        iconColor={colors.accent}
        iconName="lock"
        Icon={MaterialIcons}
        {...form.getInputProps("password")}
      />

      <Button
        width={300}
        bgColor={colors.accent}
        onPress={register}
        text="Sign In"
      />

      <AuthPageNav
        link="login"
        linkText="Sign in"
        text="already have a account?"
      />

      <GoogleButton />
    </View>
  );
};

export default LoginForm;
