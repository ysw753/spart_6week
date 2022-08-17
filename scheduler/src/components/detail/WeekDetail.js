import styled from "styled-components";
import Header from "../Header/Header";
import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { VscEdit } from "react-icons/vsc";
import axios from "axios";
import AuthContext from "../../contextStore/auth-context";

const mapFnc = () => {};

const WeekDetail = () => {
  const [weekSchedule, setweekSchedule] = useState(false);
  const closeSchedule = () => {
    setweekSchedule(false);
  };
  const [toggle, setToggle] = useState(false);

  const toggleFnc = () => {};
  const [dayToggle, setDayToggle] = useState("");
  const onClickHandler = (day) => {
    setToggle((toggle) => !toggle);
    if (day === "1") setDayToggle("1");
    if (day === "2") setDayToggle("2");
    if (day === "3") setDayToggle("3");
    if (day === "4") setDayToggle("4");
    if (day === "5") setDayToggle("5");
    if (day === "6") setDayToggle("6");
    if (day === "7") setDayToggle("7");
    //if (toggle)
  };

  // //데이터 불러오기
  // const [fetchWeekData, setFetchWeedData] = useState([]);
  // const [changeState, setChangeState] = useState(false);

  // //get
  // const getFetch = async () => {
  //   axios
  //     .get(
  //       "url",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       const getfetchdata = res.data.daylist;
  //       console.log(res.data.daylist);
  //       setFetchWeedData(getfetchdata);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // //create
  // const createFetch = axios.create({
  //   BASE_URL: "",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  //   withCredentials: true,
  // });

  // const onCreateHandler = async () => {
  //   const title = titleRef.current.value;
  //   const contents = contentsRef.current.value;
  //   const data = { title, contents };
  //   try {
  //     const res = await createFetch.post("", JSON.stringify(data));
  //     //성공하면 우리 데이터에 저장을 시켜줘야함
  //     //changeState변화줌
  //     setChangeState((prev) => !prev);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const titleRef = useRef();
  const contentRef = useRef();
  const accessToken = localStorage.getItem("accessToken");
  const [changeState, setChangeState] = useState(false);

  //삭제

  const deleteFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const onDeleteHandler = async (getId) => {
    const id = Number(getId);
    try {
      const res = await deleteFetch.delete(
        `http://13.209.76.88/api/post/week/${id}`
      );
      //삭제시 우리 데이터에 삭제해야함
      //changeState변화줌
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  //업데이트
  const updateFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  const onUpdateHandler = async (id) => {
    const title = titleRef.current.value;
    const contents = contentRef.current.value;

    console.log(id);
    const idd = Number(id);
    const data = {
      title,
      contents,
      id: idd,
    };
    try {
      const res = await updateFetch.put(
        `http://13.209.76.88/api/post/week/${id}`,
        JSON.stringify(data)
      );
      setToggle(false);
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  ///////추가
  const weekTitleRef = useRef();
  const weekContentsRef = useRef();

  const [radiotype, setRadioType] = useState();
  const radioHandler = (e) => {
    setRadioType(e.target.value);
  };

  const createFetch = axios.create({
    BASE_URL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const onCreateHandler = async () => {
    const title = weekTitleRef.current.value;
    const contents = weekContentsRef.current.value;
    const id = Number(radiotype);
    console.log(id);
    //일요일 1
    const data = { title, contents, daynum: id };
    try {
      const res = await createFetch.post(
        "http://13.209.76.88/api/post/week",
        JSON.stringify(data)
      );
      //성공하면 우리 데이터에 저장을 시켜줘야함
      //changeState변화줌
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  //처음 데이터 불러오기
  const [fetchData, setFetchData] = useState([]);

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
        const getfetchdata = res.data.weeklist;
        console.log(getfetchdata);
        setFetchData(getfetchdata);
        //setFetchData(getfetchdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFetch();
  }, [changeState]);
  return (
    <>
      <Header />
      <Modal visible={weekSchedule} closeModal={closeSchedule}>
        <h1>일정을 등록하세요</h1>
        <div style={{ display: "flex", justifContent: "center" }}>
          <input
            onChange={radioHandler}
            type="radio"
            id="sun"
            name="day"
            value="1"
          ></input>
          <label htmlFor="sun">일요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="mon"
            name="day"
            value="2"
          ></input>
          <label htmlFor="mon">월요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="tue"
            name="day"
            value="3"
          ></input>
          <label htmlFor="tue">화요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="wed"
            name="day"
            value="4"
          ></input>
          <label htmlFor="wed">수요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="thr"
            name="day"
            value="5"
          ></input>
          <label htmlFor="thr">목요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="fri"
            name="day"
            value="6"
          ></input>
          <label htmlFor="fri">금요일</label>
          <br></br>
          <input
            onChange={radioHandler}
            type="radio"
            id="sat"
            name="day"
            value="7"
          ></input>
          <label htmlFor="sat">토요일</label>
          <br></br>
        </div>
        제목{" "}
        <input
          ref={weekTitleRef}
          name="title"
          type={"text"}
          placeholder={"제목"}
        ></input>
        내용{" "}
        <input
          ref={weekContentsRef}
          name="contents"
          type={"text"}
          placeholder={"내용"}
        ></input>
        <div>
          <Button onClick={onCreateHandler}>등록하기</Button>
          <Button type="button" onClick={closeSchedule}>
            취소
          </Button>
        </div>
      </Modal>
      {/* -------------------------------------------------------------------------------- */}

      <WeekView>
        <p style={{ fontSize: "30px", textAlign: "center" }}>week page</p>

        <WeekBox>
          <Day>
            일
            {fetchData.map((i) =>
              i.daynum === 1 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "1" ? (
                      <div>
                        <input ref={titleRef} id="1" type="text"></input>
                        <input ref={contentRef} id="1" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("1")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            월
            {fetchData.map((i) =>
              i.daynum === 2 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "2" ? (
                      <div>
                        <input ref={titleRef} id="2" type="text"></input>
                        <input ref={contentRef} id="2" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("2")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            화
            {fetchData.map((i) =>
              i.daynum === 3 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "3 " ? (
                      <div>
                        <input ref={titleRef} id="3 " type="text"></input>
                        <input ref={contentRef} id="3 " type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("3 ")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            수
            {fetchData.map((i) =>
              i.daynum === 4 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "4" ? (
                      <div>
                        <input ref={titleRef} id="4" type="text"></input>
                        <input ref={contentRef} id="4" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("4")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            목
            {fetchData.map((i) =>
              i.daynum === 5 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "5" ? (
                      <div>
                        <input ref={titleRef} id="5" type="text"></input>
                        <input ref={contentRef} id="5" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("5")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            금
            {fetchData.map((i) =>
              i.daynum === 6 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "6" ? (
                      <div>
                        <input ref={titleRef} id="6" type="text"></input>
                        <input ref={contentRef} id="6" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("6")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>

          <Day>
            토
            {fetchData.map((i) =>
              i.daynum === 7 ? (
                <div>
                  <div>
                    {toggle && dayToggle === "7" ? (
                      <div>
                        <input ref={titleRef} id="7" type="text"></input>
                        <input ref={contentRef} id="7" type="text"></input>
                      </div>
                    ) : (
                      <div>
                        <h4>{i.title}</h4>
                        <h5>{i.contents}</h5>
                      </div>
                    )}
                  </div>
                  {toggle ? (
                    <button onClick={() => onUpdateHandler(i.id)}>완료</button>
                  ) : (
                    <>
                      <button onClick={() => onDeleteHandler(i.id)}>
                        삭제
                      </button>
                      <VscEdit
                        size="15"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHandler("7")}
                      />
                    </>
                  )}
                </div>
              ) : null
            )}
          </Day>
        </WeekBox>
        <div style={{ marginLeft: "700px" }}>
          <Button
            onClick={() => {
              setweekSchedule(true);
            }}
          >
            일정 등록
          </Button>
        </div>
      </WeekView>
    </>
  );
};

export default WeekDetail;

const WeekView = styled.div`
  margin: auto;
  width: 1500px;
  height: 800px;
  background-color: navajowhite;
  border-radius: 50px;
`;

const Day = styled.div`
  border: 2px solid saddlebrown;
  height: 450px;
  width: 200px;
  margin: auto;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
`;
const WeekBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  position: absoulte;
  margin: auto;
  paddingn: autopx;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 7px;
  background-color: burlywood;
  font-size: 13px;
  border: 1px solid darkgoldenrod;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: peru;
  }
`;
const P = styled.div`
marginn:9auto
text-align:left;
`;
