import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../Header/Header";

const DUMMY = [
  {
    user: {
      userid: "useridawdxxa",
      nickname: "yoo",
      password: "12345",
      username: "유성원",
      day: {
        dayId: "dayidakxxx",
        text: "리액트를 공부하기",
        title: "공부하기",
      },
    },
  },
  {
    user: {
      userid: "useridawdxxa",
      nickname: "yoo",
      password: "12345",
      username: "유성원",
      day: {
        dayId: "dayidakxxx",
        text: "스프링을 공부하기",
        title: "공부하기",
      },
    },
  },
  {
    user: {
      userid: "useridawdxxa",
      nickname: "yoo",
      password: "12345",
      username: "유성원",
      day: {
        dayId: "dayidakxxx",
        text: "집 주변 10바퀴 걷기",
        title: "운동하기",
      },
    },
  },
  {
    user: {
      userid: "useridawdxxa",
      nickname: "yoo",
      password: "12345",
      username: "유성원",
      day: {
        dayId: "dayidakxxx",
        text: "집 주변 10바퀴 걷기",
        title: "운동하기",
      },
    },
  },
  {
    user: {
      userid: "useridawdxxa",
      nickname: "yoo",
      password: "12345",
      username: "유성원",
      day: {
        dayId: "dayidakxxx",
        text: "집 주변 10바퀴 걷기",
        title: "운동하기",
      },
    },
  },
];

const Detail = () => {
  const dayDataArr = useSelector((state) => state.dayData.value);
  console.log(dayDataArr);
  return (
    <>
      <Header />
      <MainBox>
        <DaySection>
          {dayDataArr?.map((dayData) => (
            <Card>
              <p>{dayData.title}</p>
              <p>{dayData.text}</p>
            </Card>
          ))}
        </DaySection>
      </MainBox>
    </>
  );
};
export default Detail;
const MainBox = styled.div`
  width: 1000px;
  min-width: 1000px;

  background-color: orange;
  margin: auto;
`;
const Card = styled.div`
  margin: auto;
  width: inherit;
  height: 100px;
  background-color: green;
`;
const DaySection = styled.div`
  margin: 10px;
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
