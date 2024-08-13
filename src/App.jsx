import "./App.css";
import Header from "./components/Header.jsx";
import InputBar from "./components/InputBar.jsx";
import NationList from "./components/NationList.jsx";
import { useState, useRef } from "react";

function App() {
  // 국가 별 메달 수 데이터를 담을 medalsByNation, 그리고 이 상태를 관리할 setMedalsByNation 함수
  const [medalsByNation, setMedalsByNation] = useState([]);

  // id를 기록하기 위한 레퍼런스 객체. 초기값 0으로 설정.
  const idRef = useRef("0");

  // 국가, 메달 수 정보를 받아서 객체로 만들고 medalsByNation에 추가할 함수
  const createNation = (nation, gold, silver, bronze) => {
    const newNation = {
      id: idRef.current++,
      nation,
      gold,
      silver,
      bronze,
    };

    setMedalsByNation([newNation, ...medalsByNation]);
  };

  const onRemoveNation = (id) => {
    setMedalsByNation(medalsByNation.filter((nation) => nation.id !== id));
  };

  // 수정 국가, 금, 은, 동, 입력하고 수정 버튼을 클릭한다.
  // 저장되어 있는 배열 medalsByNation에서 해당하는 국가명을 가진 객체가 있는지 찾는다.
  // 있다면 그 객체의 정보를 바꾸고 setMedalsByNation를 통해 새로 저장한다.
  const onUpdateNation = (nation, gold, silver, bronze) => {
    setMedalsByNation(
      medalsByNation.map((country) => {
        if (country.nation === nation) {
          return {
            ...country,
            gold,
            silver,
            bronze,
          };
        }
        return country;
      })
    );
  };

  return (
    <div className="app-wrapper">
      <Header />
      <InputBar createNation={createNation} onUpdateNation={onUpdateNation} medalsByNation={medalsByNation} />
      <NationList medalsByNation={medalsByNation} onRemoveNation={onRemoveNation} />
    </div>
  );
}

export default App;
