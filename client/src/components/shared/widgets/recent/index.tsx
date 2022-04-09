import { View } from "react-native";
import React from "react";
import { RecentNav } from ".";
import RecentItems from "./RecentItems";
import { IAlbum } from "models";

interface RecentViews {
  recentItems: IAlbum[];
}

export const RecentViews: React.FC<RecentViews> = (props) => {
  const { recentItems } = props;

  return (
    <View>
      <RecentNav />
      <RecentItems items={recentItems} />
    </View>
  );
};

export { default as RecentNavActions } from "./RecentTopbarActions";
export { default as RecentNav } from "./RecentNav";
export { default as RecentItem } from "./RecentItem";
export { default as RecentItems } from "./RecentItems";
