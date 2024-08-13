import "./NationItem.css";

const NationItem = ({ id, nation, gold, silver, bronze, onRemoveNation }) => {
  const onClickRemove = () => {
    onRemoveNation(id);
  };
  return (
    <tr className="nationitem-wrapper">
      <td className="nation">{nation}</td>
      <td className="gold">{gold}</td>
      <td className="silver">{silver}</td>
      <td className="bronze">{bronze}</td>
      <td className="total">{Number(gold) + Number(silver) + Number(bronze)}</td>
      <td>
        <button onClick={onClickRemove}>삭제</button>
      </td>
    </tr>
  );
};

export default NationItem;
