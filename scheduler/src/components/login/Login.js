import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const goSignup = () => {
    navigate("/join");
  };
  /*const goSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
    } else {

      //{username ,nickname, password}
      //요청보내기
      axios
        .post(url, JSON.stringify({ nickname, password }), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
    alert("로그인완료");
    navigate("/:id/main");
  };*/

  return (
    <>
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>로그인</h3>
        <form>
          <input ref={emailInputRef} placeholder="id" />
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
