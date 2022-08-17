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

  const onClickHandler = () => {
    setToggle(toggle => !toggle)
  };


  const weekTitleRef = useRef();
  const weekContentsRef = useRef();

  // const onCreateHandler = async () => {
  //   const title = weekTitleRef.current.id;
  //   const contents = weekContentsRef.current.id;
  //   const data = { title, contents };
    
  return (
  <>
    <Header />
      <Modal visible={weekSchedule} closeModal={closeSchedule}>
        <h1>일정을 등록하세요</h1>
        <div style={{ display: 'flex', justifContent: 'center'}}>
        <input type="radio" id="sun" name="day" value="sun"></input>
          <label for="sun">일요일</label><br></br>
        <input type="radio" id="mon" name="day" value="mon"></input>
          <label for="mon">월요일</label><br></br>
        <input type="radio" id="tue" name="day" value="tue"></input>
          <label for="tue">화요일</label><br></br>
       <input type="radio" id="wed" name="day" value="wed"></input>
          <label for="wed">수요일</label><br></br>
       <input type="radio" id="thr" name="day" value="thu"></input>
          <label for="thu">목요일</label><br></br>
       <input type="radio" id="fri" name="day" value="fri"></input>
          <label for="fri">금요일</label><br></br>
       <input type="radio" id="sat" name="day" value="sat"></input>
          <label for="sat">토요일</label><br></br>
       </div>
        제목 <input 
            ref={weekTitleRef}
            name="title"
            type={"text"}
            placeholder={"제목"}>
            </input>
        내용 <input
            ref={weekContentsRef}
            name="contents"
            type={"text"}
            placeholder={"내용"}>
            </input>
          <div>
          <Button>등록하기</Button>
          <Button onClick={closeSchedule}>취소</Button>
          </div>
      </Modal>

        <WeekView>    
        <p style={{fontSize:'30px',textAlign:'center'}}>week page</p>
        <WeekBox>
        <Day>일
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="sun" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="sun" type='text'></input>)}
        <div style={{margin:'autopx'}}>삭제하기</div>
        </Day>
        <Day>월
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="mon" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="mon" type='text'></input>)}
        </Day>
        <Day>화
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="tue" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="tue" type='text'></input>)}
        </Day>
        <Day>수
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="wed" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="wed" type='text'></input>)}
        </Day>
        <Day>목
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="thu"type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="thu" type='text'></input>)}
        </Day>
        <Day>금
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="fri" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="fri" type='text'></input>)}
        </Day>
        <Day>토
        <VscEdit size='15'style={{cursor: 'pointer'}}onClick={()=>{onClickHandler()}}/>
        {toggle?( <P>title</P>):(<input id="sat" type='text'></input>)}
        {toggle?( <P>content</P>):(<input id="sat" type='text'></input>)}
        </Day>
        </WeekBox>
        <div style={{marginLeft:'700px'}}>
        <Button onClick={()=>{setweekSchedule(true)}}>일정 등록1</Button>
        </div>
        
        {toggle?(null):(<Button style={{marginLeft:'700px',marginTop:'30px'}} onClick={{}}>수정 완료</Button>)}
  
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
  border-radius:50px;
`;

const Day = styled.div`
  border: 2px solid saddlebrown;
  height:450px;
  width:200px;
  margin:auto;
  font-size:20px;
  border-radius:10px;
  font-weight:bold;
  text-align: center;
`;
const WeekBox= styled.div`
  display: flex;
  justify-content: center;

`
const Button = styled.button`
  position : absoulte;
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
const P= styled.div`
marginn:9auto
text-align:left;
`
