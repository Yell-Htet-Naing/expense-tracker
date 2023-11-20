import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Balance = () => {

  const {transcations} = useContext(GlobalContext);

  const amounts = transcations.map(transcation => transcation.amount);

  const total = amounts.reduce((acc, item) => acc += item,0)


  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  );
};

export default Balance;
