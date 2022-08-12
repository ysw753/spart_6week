import { useNavigate } from "react-router";
import styled from "styled-components";

const Join = () => {
  const navigate = useNavigate();
  const gojoin = () => {
    navigate(`/`);
  };

  return (
    <>
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>회원가입</h3>
        <form onSubmit={gojoin}>
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
