import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../Header/Header";

const Main = () => {
  const navigate = useNavigate();

  const goDay = () => {
    navigate("/detail");
  };
  const goWeek = () => {
    navigate("/weekdetail");
  };

  return (
    <>
      <Header />
      <Section>
        {/* <Left>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/220px-William_James_b1842c.jpg" />
          <p>
            "생각이 바뀌면 행동이 바뀌고, 행동이 바뀌면 습관이 바뀌며, 습관이
            바뀌면 인격 또한 바뀌고, 인격이 바뀌면 운명 까지도 바뀐다" -Williams
            James-
          </p>
        </Left> */}
        <MainBox>
          <DaySection onClick={goDay}>
            일간스케쥴
            <p>나는 오늘 무엇을 할까요?</p>
          </DaySection>

          <WeekSection onClick={goWeek}>주간스케쥴</WeekSection>
        </MainBox>
      </Section>
    </>
  );
};
export default Main;
const MainBox = styled.div`
  width: 800px;
  min-width: 800px;

  margin: auto;
  margin-top: 30px;
`;

const DaySection = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 20px;
  border: 5px solid #3d336e;
  height: 300px;
`;

const WeekSection = styled.div`
  &:hover {
    cursor: pointer;
  }
  border: 5px solid #3d336e;
  height: 300px;
`;
const MonthSection = styled.div`
  border: 10px solid #3d336e;
  margin: 10px;
  width: 500px;
  height: 300px;
  background-color: blue;
`;
const Img = styled.img`
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
const Left = styled.div`
  position: relative;
  min-width: 450px;
  width: 500px;
  p {
    width: 450px;
    color: white;
    position: absolute;
    top: 500px;
    text-align: right;
  }
`;
const Section = styled.div`
  display: flex;
`;
