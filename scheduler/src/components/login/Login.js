import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/join");
  };
  const goSubmit = (e) => {
    e.preventDefault();
    const id = e.currentTarget[0].value;
    const password = e.currentTarget[1].value;
    alert("로그인완료");
    navigate("/:id/main");
  };

  return (
    <>
      <Title>SCHEDULER</Title>

      <FormBox>
        <h3>로그인</h3>
        <form onSubmit={goSubmit}>
          <input placeholder="id" />
          <input type="password" placeholder="password" minLength={8} />
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
