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
