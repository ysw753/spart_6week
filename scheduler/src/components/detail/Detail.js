import styled from "styled-components";
import Header from "../Header/Header";
import Modal from "./Modal";
import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSchedule,
  deleteSchedule,
  updateSchedule,
} from "../../redux/dayDataSlice";
import axios from "axios";
import AuthContext from "../../contextStore/auth-context";
import { addListener } from "@reduxjs/toolkit";

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
  // 1. 토큰으로  get요청을 보낸다.
  // 2. 받아서 state에 저장한다.
  // 3. 뿌린다.
  const authCtx = useContext(AuthContext);
  //const accessToken = authCtx.accessToken;
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);

  //day생성 포스트 요청 보냄

  //day 수정 포스트 요청보냄

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
    id: "",
    title: "",
    contents: "",
  });
  const cardData = (item) => {
    console.log(item);
    setSchedule(true);
    setcardD({ id: item.id, title: item.title, contents: item.contents });
  };

  const Dispatch = useDispatch();
  const dayData = useSelector((state) => state.dayData.schedule);

  // 토글 클릭 시 변경
  const [toggle, setToggle] = useState(true);
  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };
  const titleRef = useRef();
  const contentsRef = useRef();

  //********************* */
  // const createFetch = async (data) => {
  //   console.log(data);
  //   axios
  //     .post(
  //       "http://13.209.76.88/api/post/day",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         data,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       //setDataLoading(false);
  //       alert("완료");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //**************************** */

  // //get
  // const [fetchDayData, setFetchDayDate] = useState([]);
  // //const [isDataLoading, setDataLoading] = useState(true);
  // const getFetch = axios.create({
  //   BASE_URL: "",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  //   withCredentials: true,
  // });
  // const callGetFetch = async () => {
  //   try {
  //     const res = await getFetch.get("http://13.209.76.88/api/post/day");
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   callGetFetch();
  // }, []);

  ////////////////////////////////////////////////////////////////////////////////

  const [fetchData, setFetchData] = useState([]);
  const [changeState, setChangeState] = useState(false);
  //일단 get됨
  const getFetch = async () => {
    axios
      .get(
        "http://13.209.76.88/member/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        const getfetchdata = res.data.daylist;
        console.log(res.data.daylist);
        setFetchData(getfetchdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //일단 create됨
  const createFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const onCreateHandler = async () => {
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    const data = { title, contents };
    try {
      const res = await createFetch.post(
        "http://13.209.76.88/api/post/day",
        JSON.stringify(data)
      );
      //성공하면 우리 데이터에 저장을 시켜줘야함
      //changeState변화줌
      setChangeState((prev) => !prev);
      closeScheduleModal();
    } catch (error) {
      console.log(error);
    }
  };

  //삭제해보자
  const deleteFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const onDeleteHandler = async (getId) => {
    console.log(getId);
    try {
      const res = await deleteFetch.delete(
        `http://13.209.76.88/api/post/day/${getId}`
      );
      //삭제시 우리 데이터에 삭제해야함
      //changeState변화줌
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  //업데이트해보자
  const updateTitleRef = useRef();
  const updateContentsRef = useRef();
  const updateFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const onUpdateHandler = async (getId) => {
    const title = updateTitleRef.current.value;
    const contents = updateContentsRef.current.value;
    const data = { title, contents };

    console.log(getId);
    try {
      const res = await updateFetch.put(
        `http://13.209.76.88/api/post/day/${getId}`,
        JSON.stringify(data)
      );
      //삭제시 우리 데이터에 삭제해야함
      //changeState변화줌
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  // const onUpdateHandler = (getId) => {
  //   const title = updateTitleRef.current.value;
  //   const contents = updateContentsRef.current.value;
  //   const obj = { title, contents };
  //   axios
  //     .put(
  //       `http://13.209.76.88/api/post/day/${getId}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       },
  //       { withCredentials: true },
  //       obj
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       const fetchdata = res.data.daylist;
  //       setFetchDate(fetchdata);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   closeSchedule();
  // };

  useEffect(() => {
    getFetch();
  }, [changeState]);

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
        {console.log(cardD)}
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
            <Button onClick={() => onUpdateHandler(cardD.id)}>수정완료</Button>
          )}
          <Button onClick={closeSchedule}>되돌아가기</Button>
        </div>
      </Modal>

      <Header />

      <MainBox>
        <DaySection>
          {fetchData.map((item) => {
            return (
              <Card>
                <Edit key={item.id} onClick={() => cardData(item)}>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.contents}</p>
                  </div>
                </Edit>
                <Delete onClick={() => onDeleteHandler(item.id)}>
                  삭제하기
                </Delete>
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
  background-color: #dcd7f5;
  margin: auto;
`;
const Card = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: left;
  background-color: #9a8fd1;
`;
const DaySection = styled.div`
  margin: 10px;
  margin-top: 50px;
  padding: 10px;
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
  border: 3px solid #9e90e6;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: #9e90e6;
  }
`;
const Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 100px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: 9e90e6;
  }
`;
const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 100px;
  margin: auto;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: gainsboro;
  }
`;
