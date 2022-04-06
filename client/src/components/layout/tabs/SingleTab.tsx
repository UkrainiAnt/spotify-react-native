import { StyleSheet, View, ViewStyle, Text } from "react-native";
import React from "react";
import { useRouting } from "hooks";
import { useAuthState } from "hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "variables";

interface ITabItem {
  to: string;
  iconSet: any;
  Icon: string;
  label: string;
}

interface SingleTapProps {
  tab: ITabItem;
}

const SingleTab: React.FC<SingleTapProps> = (props) => {
  const { user } = useAuthState();
  const { tab } = props;
  const { route, navigateTo } = useRouting();
  const isActive = route.name === tab.to;

  return (
    <TouchableOpacity onPress={navigateTo(tab.to, { userId: user?.id || 1 })}>
      <View style={styles.wrapper(isActive)}>
        <tab.iconSet
          name={tab.Icon}
          size={26}
          color={isActive ? "#0284c7" : colors.secondary}
        />

        <Text
          style={{
            color: isActive ? colors.blue : colors.secondary,
            fontSize: 12,
          }}
        >
          {tab.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleTab;

const styles = StyleSheet.create({
  wrapper: (isActive: boolean): ViewStyle => ({
    alignItems: "center",
    justifyContent: "center",

    padding: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    opacity: isActive ? 1 : 0.5,
  }),
} as any);
