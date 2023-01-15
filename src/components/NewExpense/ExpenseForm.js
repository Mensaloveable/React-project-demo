import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      title: title,
      date: new Date(date),
      amount: amount,
    };

    props.onSaveExpenseData(item)
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/** 
 
// using single useState

  const [item, setItem] = useState({
    title: "",
    date: "",
    amount: "",
  });

  const titleChangeHandler = (event) => {
    setItem((prevItem) => {
      return {
        ...prevItem,
        title: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setItem((prevItem) => {
      return {
        ...prevItem,
        date: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setItem((prevItem) => {
      return {
        ...prevItem,
        amount: event.target.value,
      };
    });
  };

  */