import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { create } from "../../redux/userSlice";

const Join = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const goJoin = (e) => {
    e.preventDefault();
    const username = e.currentTarget[0].value;
    const nickname = e.currentTarget[1].value;
    const password = e.currentTarget[2].value;
    const paaswordCheck = e.currentTarget[3].value;
    const userid = "useridawdxxa";

    const goBackendObj = { username, nickname, password, password };
    const tmpReduxDataObj = { userid, username, nickname };
    //백으로 보냄
    //백에서 유효성 검사를 해서 잘되면 리덕스로 보냄

    //일단은 리덕스로보냄
    dispatch(create(tmpReduxDataObj));
    navigate("/");
    setState(true);
  };

  return (
    <>
      {console.log("inreturn")}
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>회원가입</h3>
        <form onSubmit={goJoin}>
          <input placeholder="이름" />
          <input placeholder="닉네임" />
          <input placeholder="비밀번호" minLength={8} />
          <input placeholder="비밀번호확인" minLength={8} />
          <div>
            <button>가입하기</button>
          </div>
        </form>
      </FormBox>
    </>
  );
};
export default Join;

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
