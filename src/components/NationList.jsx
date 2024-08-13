import "./NationList.css";
import NationItem from "./NationItem";
import { useState } from "react";

const NationList = ({ medalsByNation, onRemoveNation }) => {
  const [search, setSearch] = useState("");

  const onSearchWord = (e) => {
    setSearch(e.target.value);
  };

  const filteringFunc = () => {
    if (search === "") return medalsByNation;

    return medalsByNation.filter((country) => country.nation.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredNation = filteringFunc();
  const filteredSortedNation = filteredNation.sort((a, b) => b.gold - a.gold);

  // 사용자가 국가명 입력
  // state 관리로 search에 넣어준다.
  // 필터링하는 함수 실행하고 변수에 담는다
  // 이 변수를 목록 뿌릴 때 넘겨준다.
  // filteredNation 이거를 sort로 정렬해서 넘기면 되는 거 아니야?

  return (
    <div className="nationlist-wrapper">
      <input value={search} onChange={onSearchWord} placeholder="국가명 검색" type="text" />
      {medalsByNation.length > 0 ? (
        <table className="nation-item">
          <thead>
            <tr>
              <th>Nation</th>
              <th className="table-gold">Gold</th>
              <th className="table-silver">Silver</th>
              <th className="table-bronze">Bronze</th>
              <th className="table-total">Total</th>

              <th>etc.</th>
            </tr>
          </thead>
          <tbody>
            {filteredSortedNation.map((nation) => (
              <NationItem key={nation.id} {...nation} onRemoveNation={onRemoveNation} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">국가 및 메달 정보를 입력하세요</div>
      )}
    </div>
  );
};

export default NationList;

// { medalsByNation.length > 0 ?(<table></table>) : (<div>결과가 없습니다</div>)}
