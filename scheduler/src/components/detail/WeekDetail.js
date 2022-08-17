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
    if (day === "sun") setDayToggle("sun");
    if (day === "mon") setDayToggle("mon");
    if (day === "tue") setDayToggle("tue");
    if (day === "wed") setDayToggle("wed");
    if (day === "thu") setDayToggle("thu");
    if (day === "fri") setDayToggle("fri");
    if (day === "sat") setDayToggle("sat");
    //if (toggle)
  };

  const weekTitleRef = useRef();
  const weekContentsRef = useRef();

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

  return (
    <>
      <Header />
      <Modal visible={weekSchedule} closeModal={closeSchedule}>
        <h1>일정을 등록하세요</h1>
        <div style={{ display: "flex", justifContent: "center" }}>
          <input type="radio" id="sun" name="day" value="sun"></input>
          <label for="sun">일요일</label>
          <br></br>
          <input type="radio" id="mon" name="day" value="mon"></input>
          <label for="mon">월요일</label>
          <br></br>
          <input type="radio" id="tue" name="day" value="tue"></input>
          <label for="tue">화요일</label>
          <br></br>
          <input type="radio" id="wed" name="day" value="wed"></input>
          <label for="wed">수요일</label>
          <br></br>
          <input type="radio" id="thr" name="day" value="thu"></input>
          <label for="thu">목요일</label>
          <br></br>
          <input type="radio" id="fri" name="day" value="fri"></input>
          <label for="fri">금요일</label>
          <br></br>
          <input type="radio" id="sat" name="day" value="sat"></input>
          <label for="sat">토요일</label>
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
          <Button>등록하기</Button>
          <Button onClick={closeSchedule}>취소</Button>
        </div>
      </Modal>
      {/* -------------------------------------------------------------------------------- */}

      <WeekView>
        <p style={{ fontSize: "30px", textAlign: "center" }}>week page</p>

        <WeekBox>
          <Day>
            일
            <div>
              <div>
                {toggle && dayToggle === "sun" ? (
                  <div>
                    <input id="sun" value="sun" type="text"></input>
                    <input id="sun" value="sun" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("sun")}
              />
            </div>
          </Day>
          <Day>
            월
            <div>
              <div>
                {toggle && dayToggle === "mon" ? (
                  <div>
                    <input id="mon" value="mon" type="text"></input>
                    <input id="mon" value="mon" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("mon")}
              />
            </div>
          </Day>
          <Day>
            화
            <div>
              <div>
                {toggle && dayToggle === "tue" ? (
                  <div>
                    <input id="tue" value="tue" type="text"></input>
                    <input id="tue" value="tue" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("tue")}
              />
            </div>
          </Day>
          <Day>
            수
            <div>
              <div>
                {toggle && dayToggle === "wed" ? (
                  <div>
                    <input id="wed" value="wed" type="text"></input>
                    <input id="wed" value="wed" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("wed")}
              />
            </div>
          </Day>
          <Day>
            목
            <div>
              <div>
                {toggle && dayToggle === "thu" ? (
                  <div>
                    <input id="thu" value="thu" type="text"></input>
                    <input id="thu" value="thu" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("thu")}
              />
            </div>
          </Day>
          <Day>
            금
            <div>
              <div>
                {toggle && dayToggle === "fri" ? (
                  <div>
                    <input id="fri" value="fri" type="text"></input>
                    <input id="fri" value="fri" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("fri")}
              />
            </div>
          </Day>
          <Day>
            토
            <div>
              <div>
                {toggle && dayToggle === "sat" ? (
                  <div>
                    <input id="sat" value="sat" type="text"></input>
                    <input id="sat" value="sat" type="text"></input>
                  </div>
                ) : (
                  <div>
                    <p>title</p>
                    <p>content</p>
                  </div>
                )}
              </div>
              <VscEdit
                size="15"
                style={{ cursor: "pointer" }}
                onClick={() => onClickHandler("sat")}
              />
            </div>
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
