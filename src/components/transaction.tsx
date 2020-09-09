import React, { useContext } from "react";
import { GlobalContext } from "../globalState/globalProvider";

const Transaction = ({ trans }: any) => {
  const { dispatch } = useContext(GlobalContext);

  const sign: string = trans.amount < 0 ? "-" : "+";

  function deleteTran(id: number): void {
    dispatch({
      type: "DEL",
      payload: id,
    });
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    deleteTran(trans.id);
  };

  return (
    <li className={trans.amount < 0 ? "transItem" : "transItem"}>
      <p>{trans.text}</p>
      <span>
        {"$ " + sign + Math.abs(trans.amount)}
        <span>
          <button
            type="button"
            onClick={handleClick}
            style={{ backgroundColor: "white", color: "black", border: "1px" }}
          >
            &times;
          </button>
        </span>
      </span>
    </li>
  );
};
export default Transaction;
