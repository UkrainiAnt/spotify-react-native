import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth.provider";

const useAuthState = () => {
  return useContext(AuthContext);
};

export default useAuthState;
