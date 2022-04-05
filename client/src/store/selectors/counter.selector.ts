import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export const counterSelector = createSelector(
  (state: RootState) => state.counter,
  (counter) => counter.count
);
