import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { IconButton } from "components/shared";
import { colors } from "variables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface RecentNavActionsProps {
  onBellPress: () => void;
  onClockPress: () => void;
  onOptionsPress: () => void;
}

const RecentNavActions: React.FC<RecentNavActionsProps> = (props) => {
  const { onBellPress, onClockPress, onOptionsPress } = props;

  return (
    <View style={styles.wrapper}>
      <IconButton
        style={{ margin: 5 }}
        Icon={<FontAwesome5 name="bell" size={28} color={colors.white} />}
        onPress={onBellPress}
      />

      <IconButton
        style={{ margin: 5 }}
        Icon={
          <MaterialCommunityIcons
            name="progress-clock"
            size={28}
            color={colors.white}
          />
        }
        onPress={onClockPress}
      />

      <IconButton
        style={{ margin: 5 }}
        Icon={<Feather name="settings" size={28} color={colors.white} />}
        onPress={onOptionsPress}
      />
    </View>
  );
};

export default RecentNavActions;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
