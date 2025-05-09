import { createContext, useMemo, useState } from "react";
import dbUsersList from "./users.json";

const globalContext = createContext();

const ContextProvider = ({ children }) => {
  const userInLocal = JSON.parse(localStorage.getItem("user"));
  const [loggedInUser, setLoggedInUser] = useState(userInLocal);
  const dbUsers = dbUsersList.users.filter((u) => u.role !== "admin");
  const [cartProducts, setCartProducts] = useState([]);

  const [localUsers, setLocalUsers] = useState(dbUsers);

  const value = useMemo(
    () => ({
      loggedInUser,
      setLoggedInUser,
      localUsers,
      setLocalUsers,
      cartProducts,
      setCartProducts,
    }),
    [cartProducts, localUsers, loggedInUser]
  );

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export { globalContext };

export default ContextProvider;
