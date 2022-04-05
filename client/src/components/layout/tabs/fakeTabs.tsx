import React from "react";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const fakeTabs: any[] = [
  {
    Icon: "home",
    to: "home",
    iconSet: MaterialIcons,
  },

  {
    Icon: "add-shopping-cart",
    to: "cart",
    iconSet: MaterialIcons,
  },

  {
    Icon: "post-add",
    to: "create",
    iconSet: MaterialIcons,
  },

  {
    Icon: "heart",
    to: "liked",
    iconSet: Feather,
  },

  {
    Icon: "shop",
    to: "orders",
    iconSet: MaterialIcons,
  },

  {
    Icon: "user",
    to: "profile",
    iconSet: Feather,
  },
];

export const [fakeTab] = fakeTabs;

export default fakeTabs;
