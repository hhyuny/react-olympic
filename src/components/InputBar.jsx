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
      emptyInput();
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

          <button onClick={onUpdate} type="button">
            수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
