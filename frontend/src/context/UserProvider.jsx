import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const logout = () => {
    setUserInfo(null); // clear user data
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logout }}>
      {children}
    </UserContext.Provider>
  );
}
