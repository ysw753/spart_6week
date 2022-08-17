import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { create } from "../../redux/userSlice";

const Join = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const nickNameRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();

    const nickname = nickNameRef.current.value;
    const username = nameInputRef.current.value;
    const password = passwordInputRef.current.value;
    //닉네임 영어
    // 유저네임 상관없음
    // 패스워드 영문포함 5자이상
    console.log("회원가입페이지", nickname, username, password);

    //const dataObj = { nickname, username, password };
    setIsLoading(true);
    axios
      .post(
        "http://13.209.76.88/auth/signup",
        //{
        // headers: {
        //   "Content-Type": "application/json",
        // },dataObj
        //}
        { nickname, username, password }
      )
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
      });
  };
  const goBack = () => {
    navigate("/login");
  };
  // axios
  //   .post(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBWXwshOXBh6o-8PZ4anl622e7I_CQwtoU",
  //     JSON.stringify({ nickname, username, password }),
  //     {
  //       headers: {
  //         "Content-Type": `application/json`,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     if (res.ok) {
  //       setIsLoading(false);
  //       alert("회원가입이 되었습니다.");
  //       console.log(res);
  //       navigate("/");
  //     } else {
  //       return res.json().then((data) => {
  //         let errormessage = data.error.message;
  //         console.log(errormessage);
  //       });
  //     }
  //   });

  return (
    <>
      {console.log("inreturn")}
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>회원가입</h3>
        <form onSubmit={submitHandler}>
          <input ref={nickNameRef} placeholder="닉네임" />
          <input ref={nameInputRef} placeholder="이름" />
          <input ref={passwordInputRef} placeholder="비밀번호" />
          <div>
            <button type="button" onClick={goBack}>
              뒤로
            </button>
            <button>가입하기</button>
          </div>
        </form>
        {isLoading ? <p>회원가입중...</p> : null}
      </FormBox>
    </>
  );
};
export default Join;

const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
`;
const FormBox = styled.div`
  background-color: #cdc7ee;
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
