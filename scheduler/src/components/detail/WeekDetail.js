import styled from "styled-components";
import Header from "../Header/Header";

const mapFnc = () => {};

const WeekDetail = () => {
  return (
    <>
      <Header />
      <WeekView>
        week page
        <Day>월</Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
        <Day>토</Day>
        <Day>일</Day>
      </WeekView>
      ;
    </>
  );
};
export default WeekDetail;

const WeekView = styled.div`
  margin: auto;
  width: 1000px;
  height: 800px;
  background-color: yellow;
`;

const Day = styled.div``;
