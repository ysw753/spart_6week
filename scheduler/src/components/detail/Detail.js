import styled from "styled-components";
import Header from "../Header/Header";
import Modal from "./Modal";
import { useState } from "react";

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
];

const Detail = () => {
  const [uploadSchedule,setUploadSchedule]=useState(false);
  const closeScheduleModal=()=>{
    setUploadSchedule(false);
  };

  const [schedule,setSchedule]=useState(false);
  const closeSchedule=()=>{
    setSchedule(false);
  };

  const cardData= (item)=>{
    setSchedule(true);
    setcardD({title:item.user.day.title,contents:item.user.day.text})
  }
  const [cardD,setcardD]=useState({
    title:'',
    contents:''
  })
  const [edit,setedit]=useState(false);


  return (
    <>
<Modal visible={uploadSchedule} closeModal={closeScheduleModal}>
  <h2 style={{textAlign:"center"}}>일정을 적어주세요!</h2>
  <div>
  <h4>제목</h4>
  <input name="title" type={'text'} placeholder={'제목'}></input>
  <h5>내용</h5>
  <input name="contents"type={'text'}placeholder={'내용'}></input>
  </div>
  <div>
  <Button>등록하기</Button>
  <Button onClick={closeScheduleModal}>취소</Button>
  </div>
</Modal>

<Modal visible={schedule} closeModal={closeSchedule}data={cardD}>
              {false?<p>{cardD.title}</p>:<input type={'text'}></input>}
              <p>{cardD.contents}</p>
            <Button>수정하기</Button>
            <Button onClick={closeSchedule}>취소</Button>
      </Modal>
    <Header/>
      <MainBox>
        <DaySection>
          {DUMMY.map((dayitem) => (
         
            <Card onClick={()=>cardData(dayitem)}>
              <p>{dayitem.user.day.title}</p>
              <p>{dayitem.user.day.text}</p>
            </Card> 
            ))}
      
        
          
        </DaySection>
        <Button onClick={()=>{setUploadSchedule(true);}}>일정 등록</Button>
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
const Button = styled.button`
  display : block;
  margin:auto;
  padding-top: 10px;
  padding-bottom:10px;
  padding-left:30px;
  padding-right:30px;
  border-radius: 7px;
  background-color:white;
  font-size:13px;
  border: 3px solid gainsboro;
  cursor: pointer;
  &:hover {
  text-decoration:underline;
  background-color:gainsboro;
    }
`