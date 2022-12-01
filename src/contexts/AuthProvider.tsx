import jwt from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "@/helpers/localStorage";
import { UserI } from "@/types";
export const AuthContext = createContext({});

type props = {
  children: React.ElementType | React.ElementType[];
};
const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<UserI | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const data = {
    user,
    setUser,
    authToken,
    setAuthToken,
  };

  useEffect(() => {
    const token = getLocalStorage("accessToken");

    if (!token) return;
    const user = jwt(token);
    setUser(user);
    setAuthToken(token);
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
