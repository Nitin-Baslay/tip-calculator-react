import "./Render.css";
import React, { useState } from "react";
const Render = (props) => {
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("");
  const [name, setName] = useState("");
  const [finalCount, setFinalCount] = useState("");
  const [finalTip, setFinalTip] = useState("");

  const amountHandler = (props) => {
    setAmount(props.target.value);
  };
  const selectHandler = (props) => {
    setSelect(props.target.value);
  };
  const nameHandler = (props) => {
    setName(props.target.value);
  };
  const finalData = {
    amount: amount,
    select: select,
    name: name,
    id: Math.random().toString(),
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onData(finalData);
  };
  let count = 0;
  let final = 0;
  const handler = props.onListItems.map((ele) => {
    const calculation = ele.amount * ele.select;
    final += calculation;
    if (ele.amount === "" || ele.name === "") {
      return;
    } else {
      count++;
      return (
        <li key={ele.id}>
          {ele.name} is offering a tip of {calculation} rupees
        </li>
      );
    }
  });
  const submitHandler2 = (event) => {
    event.preventDefault();
    setFinalCount(count);
    setFinalTip(final);
    // final = props.onListItems.reduce((preValue, curValue) => {
    //   return preValue + curValue;
    // }, 0);
    // console.log(count);
    // console.log(final);
  };
  console.log(finalCount);
  console.log(finalTip);

  return (
    <div className="main">
      <header>
        <h1>TIP CALCULATOR</h1>
        <h3 className="head">Build in React</h3>
      </header>
      <form>
        <section className="part-1">
          <h4>Enter your bill amount</h4>
          <input
            type={"number"}
            placeholder="Enter Amount"
            className="inp1"
            onChange={amountHandler}
            required
          />
        </section>
        <hr />
        <section className="part-2">
          <h5>How was the service</h5>
          <select onChange={selectHandler}>
            <option>Please Select</option>
            <option value={0.2}> Excellent 20%</option>
            <option value={0.1}>Moderate 10%</option>
            <option value={0.05}>Bad 5%</option>
          </select>
          <input
            type={"text"}
            placeholder={"Customer Name"}
            className="inp2"
            required
            onChange={nameHandler}
          />
          <button className="bttn1" onClick={submitHandler}>
            Add Customer
          </button>
        </section>
        <section className="part-3">
          <h2 className="out">Customer List</h2>
          <hr />
          <ul>{handler}</ul>
        </section>
        <div className="finalbtn">
          <button className="bttn2" onClick={submitHandler2}>
            Calculate Tip & Customer
          </button>
        </div>

        <section className="part-4">
          <table>
            <tbody>
              <tr>
                <th>Total Customers</th>
                <th>Tip</th>
              </tr>
              <tr>
                <td>{finalCount}</td>
                <td>{finalTip}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </form>
      <footer>
        <h5>@2023 TIP-CALCULATOR</h5>
      </footer>
    </div>
  );
};

export default Render;
