import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contextStore/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  const user = authCtx.user;
  console.log(user);
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <HeaderBox>
      <Box>
        {isLoggedIn ? (
          <>
            <p>{user.nickname}님 환영합니다</p>
            <button onClick={logoutHandler}>로그아웃</button>
          </>
        ) : (
          <button onClick={loginHandler}>로그인</button>
        )}
      </Box>
    </HeaderBox>
  );
};
export default Header;

const Box = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 1000px;
  button {
    width: 100px;
    height: 50px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: red;
  top: 0;
  height: 100px;
  width: 100%;
`;
