import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../Header/Header";

const Main = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData.user);
  console.log(user);
  const goDay = () => {
    navigate("/detail");
  };

  return (
    <>
      <Header />
      <Section>
        <Left>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/220px-William_James_b1842c.jpg" />
          <p>
            "생각이 바뀌면 행동이 바뀌고, 행동이 바뀌면 습관이 바뀌며, 습관이
            바뀌면 인격 또한 바뀌고, 인격이 바뀌면 운명 까지도 바뀐다" -Williams
            James-
          </p>
        </Left>
        <MainBox>
          <DaySection onClick={goDay}>일간스케쥴</DaySection>
          <EtcSection>
            <WeekSection>주간스케쥴</WeekSection>
            <MonthSection>월간스케쥴</MonthSection>
          </EtcSection>
        </MainBox>
      </Section>
    </>
  );
};
export default Main;
const MainBox = styled.div`
  width: 1000px;
  min-width: 1000px;

  margin: auto;
`;

const DaySection = styled.div`
  background-color: green;

  height: 300px;
`;
const EtcSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekSection = styled.div`
  width: 500px;
  height: 300px;
  background-color: yellow;
`;
const MonthSection = styled.div`
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
