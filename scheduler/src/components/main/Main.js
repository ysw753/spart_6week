import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../Header/Header";

const Main = () => {
  const navigate = useNavigate();

  const goDay = () => {
    navigate("/detail");
  };

  return (
    <>
      <Header />
      <MainBox>
        <DaySection onClick={goDay}>일간스케쥴</DaySection>

        <EtcSection>
          <WeekSection>주간스케쥴</WeekSection>
          <MonthSection>월간스케쥴</MonthSection>
        </EtcSection>
      </MainBox>
    </>
  );
};
export default Main;
const MainBox = styled.div`
  width: 1000px;
  min-width: 1000px;
  text-align: center;
  padding: 60px;
  margin: auto;
`;

const DaySection = styled.div`
  background-color: green;

  margin: 10px;

  height: 300px;
  margin: 20px;
  padding: 10px;
`;
const EtcSection = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekSection = styled.div`
  margin: 10px;
  width: 500px;
  height: 300px;
  background-color: yellow;
`;
const MonthSection = styled.div`
  margin: 10px;
  width: 500px;
  height: 300px;
  background-color: blue;
`;
