import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const UserContext = createContext({
  user: null,
  theme: "",
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserStorage() {
      let userStorage = await AsyncStorage.getItem("@user");

      if (userStorage) {
        setUser(userStorage);
      } else {
        setUser(null);
      }
    }

    getUserStorage();
  }, []);

  async function login(username) {
    try {
      await AsyncStorage.setItem("@user", username);
      setUser(username);
    } catch (error) {
      setUser(null);
      alert("Erro!\nOcorreu um erro ao gravar no async storage.");
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem("@user");
      setUser(null);
    } catch (error) {
        alert("Erro\nErro ao efetuar logout.");
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
