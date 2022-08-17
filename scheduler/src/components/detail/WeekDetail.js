import styled from "styled-components";
import Header from "../Header/Header";

const mapFnc = () => {};

const WeekDetail = () => {
  //데이터 불러오기
  const [fetchWeekData, setFetchWeedData] = useState([]);
  const [changeState, setChangeState] = useState(false);

  //get
  const getFetch = async () => {
    axios
      .get(
        "url",
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
        setFetchWeedData(getfetchdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //create
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
      const res = await createFetch.post("", JSON.stringify(data));
      //성공하면 우리 데이터에 저장을 시켜줘야함
      //changeState변화줌
      setChangeState((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <WeekView>
        <Day>
          <button>추가</button>
        </Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
        <Day>토</Day>
      </WeekView>
      ;
    </>
  );
};
export default WeekDetail;

const WeekView = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-gap: 20px;

  width: 1000px;
  height: 800px;
  background-color: yellow;
`;

const Day = styled.div`
  margin: auto;
  margin: 10px 10px 10px 10px;

  height: 300px;
  background-color: green;
`;
