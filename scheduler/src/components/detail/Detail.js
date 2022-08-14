import styled from "styled-components";
import Header from "../Header/Header";
import Modal from "./Modal";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSchedule,
  deleteSchedule,
  updateSchedule,
} from "../../redux/dayDataSlice";

// const DUMMY = [
//   {
//     user: {
//       userid: "useridawdxxa",
//       nickname: "yoo",
//       password: "12345",
//       username: "유성원",
//       day: {
//         dayId: "dayidakxxx",
//         text: "리액트를 공부하기",
//         title: "공부하기",
//       },
//     },
//   },
//   {
//     user: {
//       userid: "useridawdxxa",
//       nickname: "yoo",
//       password: "12345",
//       username: "유성원",
//       day: {
//         dayId: "dayidakxxx",
//         text: "스프링을 공부하기",
//         title: "공부하기",
//       },
//     },
//   },
// ];

const Detail = () => {
  // 일정등록 모달
  const [uploadSchedule, setUploadSchedule] = useState(false);
  const closeScheduleModal = () => {
    setUploadSchedule(false);
  };
  //  일정수정 모달
  const [schedule, setSchedule] = useState(false);
  const closeSchedule = () => {
    setSchedule(false);
  };
  const [cardD, setcardD] = useState({
    dayId: "",
    title: "",
    contents: "",
  });
  const cardData = (item) => {
    setSchedule(true);
    setcardD({ dayId: item.dayId, title: item.title, contents: item.contents });
  };

  const Dispatch = useDispatch();
  const dayData = useSelector((state) => state.dayData.schedule);
  console.log(dayData);

  // 토글 클릭 시 변경
  const [toggle, setToggle] = useState(true);
  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };
  const titleRef = useRef();
  const contentsRef = useRef();

  const updateTitleRef = useRef();
  const updateContentsRef = useRef();

  const onUpdateHandler = (getId) => {
    const title = updateTitleRef.current.value;
    const contents = updateContentsRef.current.value;

    // const findItem=dayData.filter((item)=>item.dayId===itemId);
    // const updatedItem={...findItem[0],title:title,contents:contents};
    // console.log(updatedItem);
    const newobj = { dayId: getId, title, contents };
    Dispatch(updateSchedule(newobj));
    alert("수정완료");
    closeSchedule();
  };
  // console.log(dayData[0].contents);

  const onCreateHandler = () => {
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    Dispatch(createSchedule({ title: title, contents: contents }));
    alert("완료");
  };

  const deleteHandler = (getId) => {
    Dispatch(deleteSchedule(getId));
  };
  return (
    <>
      <Modal visible={uploadSchedule} closeModal={closeScheduleModal}>
        <h2 style={{ textAlign: "center" }}>일정을 적어주세요!</h2>
        <div>
          <h4>제목</h4>
          <input
            ref={titleRef}
            name="title"
            type={"text"}
            placeholder={"제목"}
          ></input>
          <h5>내용</h5>
          <input
            ref={contentsRef}
            name="contents"
            type={"text"}
            placeholder={"내용"}
          ></input>
        </div>
        <div>
          <Button onClick={onCreateHandler}>등록하기</Button>
          <Button onClick={closeScheduleModal}>취소</Button>
        </div>
      </Modal>
      <Modal visible={schedule} closeModal={closeSchedule} data={cardD}>
        <div style={{ margin: "auto", padding: "auto" }}>
          {toggle ? (
            <p>{cardD.title}</p>
          ) : (
            <input
              ref={updateTitleRef}
              type={"text"}
              placeholder={cardD.title}
            />
          )}
          {toggle ? (
            <p>{cardD.contents}</p>
          ) : (
            <input
              ref={updateContentsRef}
              type={"text"}
              placeholder={cardD.contents}
            />
          )}
          {toggle ? (
            <Button onClick={onClickHandler}>수정하기</Button>
          ) : (
            <Button onClick={() => onUpdateHandler(cardD.dayId)}>
              수정완료
            </Button>
          )}
          <Button onClick={closeSchedule}>되돌아가기</Button>
        </div>
      </Modal>

      <Header />
      <MainBox>
        <DaySection>
          {dayData.map((item) => {
            return (
              <Card>
                <Edit key={item.dayId} onClick={() => cardData(item)}>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.contents}</p>
                  </div>
                </Edit>
                <div onClick={() => deleteHandler(item.dayId)}>삭제하기</div>
              </Card>
            );
          })}
        </DaySection>
        <Button
          onClick={() => {
            setUploadSchedule(true);
          }}
        >
          일정 등록
        </Button>
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
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: left;
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
const Button = styled.button`
  display: block;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 7px;
  background-color: white;
  font-size: 13px;
  border: 3px solid gainsboro;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: gainsboro;
  }
`;
const Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 100px;
  &:hover {
    text-decoration: underline;
    background-color: gainsboro;
  }
`;
