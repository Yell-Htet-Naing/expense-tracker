import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTranscation = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTranscation} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTranscation = {
            id : Math.floor(Math.random() * 1000000),
            text ,
            amount : +amount,
        }

        addTranscation(newTranscation);
        setText('');
        setAmount(0);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTranscation;
