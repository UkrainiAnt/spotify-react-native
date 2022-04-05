import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { useRouting, useAuthState } from "hooks";
import { colors } from "variables";
import { Image } from "react-native";

const GoogleLogin = () => {
  const { signInWithGoogle, isLoading, user } = useAuthState();
  const { navigateTo } = useRouting();

  const singIntoGoogle = async () => {
    signInWithGoogle()
      .then(navigateTo("home"))
      .catch(() => {});
  };

  return (
    <View style={styles.wrapper}>
      <Button
        onPress={singIntoGoogle}
        title={"Sing in with Google"}
        icon={
          <Image
            source={require("assets/images/google.png")}
            style={{ width: 22, height: 22 }}
          />
        }
        buttonStyle={{
          backgroundColor: "#505050",
          borderWidth: 2,
          borderColor: "transparent",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          alignSelf: "center",
        }}
        titleStyle={{ marginHorizontal: 20, color: colors.text }}
      />
    </View>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    position: "relative",
    borderRadius: 100,
  },
});
