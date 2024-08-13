import "./InputBar.css";
import { useState, useRef } from "react";

const InputBar = ({ createNation, onUpdateNation, medalsByNation }) => {
  // 국가, 금, 은, 동 state 생성
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");
  const nationRef = useRef();

  const emptyInput = () => {
    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  // 이벤트 핸들러(input 값을 처리해서 해당하는 스테이트에 보관)
  const onChangeNation = (e) => {
    setNation(e.target.value);
  };

  const onChangeGold = (e) => {
    setGold(e.target.value);
  };
  const onChangeSilver = (e) => {
    setSilver(e.target.value);
  };
  const onChangeBronze = (e) => {
    setBronze(e.target.value);
  };

  const addNewNation = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (nation === "") {
      alert("국가를 입력해주세요.");
      nationRef.current.focus();
      return;
    }

    const dupl = medalsByNation.some((country) => country.nation === nation);
    if (dupl) {
      alert("이미 존재하는 국가입니다.");
      emptyInput();
      nationRef.current.focus();

      return;
    }

    createNation(nation, gold, silver, bronze);

    emptyInput();
    nationRef.current.focus();
  };

  const onUpdate = () => {
    onUpdateNation(nation, gold, silver, bronze);
    emptyInput();
    nationRef.current.focus();
  };

  return (
    <div className="inputbar-wrapper">
      <form className="inputbar-form" onSubmit={addNewNation}>
        <div className="form-input">
          <input value={nation} onChange={onChangeNation} ref={nationRef} placeholder="국가" />
          <input value={gold} onChange={onChangeGold} placeholder="금메달" type="number" />
          <input value={silver} onChange={onChangeSilver} placeholder="은메달" type="number" />
          <input value={bronze} onChange={onChangeBronze} placeholder="동메달" type="number" />
        </div>
        <div className="form-buttons">
          <button type="submit">추가</button>
          {/* 1. input 창 중에 나라 이름에 매칭된 state 정보를 가져와야 한다 */}
          {/* 2. state에 있는 나라이름으로 현재 존재하는 countries 배열에서 찾는다. find 메서드를 이용*/}
          {/* const targetCountry = countires.find~~~~~ */}

          {/* 3. 전체리스트가 10개, 수정 이후에도 10개*/}
          {/* 3-1. map을 사용한다. map이 순회를 도는데 targetCountry의 이름과 일치하면, gold, silver, bronze, state에 맞게 수정한다  */}
          {/* 3-2  targetCountry의 이름과 일치하지 않으면 그냥 내보낸다*/}
          {/* const newConuntries =  */}

          {/* 4. setCountries를 해주면 된다. 그러면 state 변경 -> 리렌더링 */}
          {/* 5. input에 연결되어 있는 state들을 초기화해준다. */}

          <button onClick={onUpdate} type="button">
            수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
