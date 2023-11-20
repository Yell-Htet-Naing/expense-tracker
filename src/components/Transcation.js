import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }
  

const Transcation = ({ transcation }) => {

    const {deleteTranscation} = useContext(GlobalContext);
    

    const sign = transcation.amount < 0 ? '-' : '+';

  return (
    <li className={transcation.amount < 0 ? "minus" : "plus"}>
      {transcation.text}
      <span>
        {sign}
        {moneyFormatter(transcation.amount)}
      </span>
      <button
        onClick={() => deleteTranscation(transcation.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transcation;
