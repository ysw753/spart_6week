import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../contextStore/auth-context";
const Login = () => {
  const navigate = useNavigate();
  const nickNameRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const goSignup = () => {
    navigate("/join");
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const nickname = nickNameRef.current.value;
    const password = passwordInputRef.current.value;
    console.log("로그인페이지", nickname, password);

    axios
      .post("/auth/login", JSON.stringify({ nickname, password }), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        if (res.ok) {
          console.log(res);

          return res.json();
        } else {
          return res.json().then((data) => {
            let errormessage = "로그인 실패";
            alert(errormessage);
            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        //콘솔로 data에 토큰이 어디저장되는지 본다음에 토큰을 찍자
        console.log(data);
        alert("로그인 되었습니다.");
        authCtx.login(data.accessToken);
        navigate.replace("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>로그인</h3>
        <form onSubmit={submitHandler}>
          <input ref={nickNameRef} placeholder="id" />
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="password"
            minLength={8}
          />
          <div>
            <button type="button" onClick={goSignup}>
              회원가입
            </button>
            <button>로그인</button>
          </div>
        </form>
      </FormBox>
    </>
  );
};
export default Login;
const Title = styled.h1`
  text-align: center;
`;
const FormBox = styled.div`
  background-color: gray;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  form input {
    margin: auto;
    margin-bottom: 10px;
    width: 400px;
    height: 50px;
  }
  form div {
    width: 400px;

    display: flex;
    justify-content: space-around;
  }
  form div button {
    margin-top: 50px;
    width: 100px;
    height: 50px;
  }
`;
