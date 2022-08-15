import { createContext } from "react";
import { useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, user) => {},
  logout: () => {},
  user: {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();
  //!! 참거짓 값을 부울로 바꿔줌
  //토큰이 빈 문자열이면 fasle를
  //토큰이 빈 문자열이 아니면 true를
  const userIsLoggedIn = !!token;

  const loginHandler = (token, user) => {
    setToken(token);
    localStorage.setItem("token", token);
    setUser(user);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    //일단 임시로 treu로 해놓음
    //isLoggedIn: true,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user: user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
