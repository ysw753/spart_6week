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
        <BackBtn>홈</BackBtn>
        {isLoggedIn ? (
          <>
            <p>{user}님 환영합니다</p>
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
  position: relative;
  background-color: #cdc7ee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  width: 1000px;
  button {
    width: 100px;
    height: 50px;
  }
`;
const BackBtn = styled.div`
  position: absolute;
  left: 0;
`;
const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #cdc7ee;
  top: 0;
  height: 100px;
  width: 100%;
`;
