import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const fakeTabs: any[] = [
  {
    Icon: "home-filled",
    to: "home",
    iconSet: MaterialIcons,
    label: "Home",
  },

  {
    Icon: "search",
    to: "search",
    iconSet: MaterialIcons,
    label: "Search",
  },

  {
    Icon: "my-library-music",
    to: "library",
    iconSet: MaterialIcons,
    label: "Library",
  },

  {
    Icon: "spotify",
    to: "profile",
    iconSet: FontAwesome5,
    label: "Premium",
  },
];

export const [fakeTab] = fakeTabs;

export default fakeTabs;
