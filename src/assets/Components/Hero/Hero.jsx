import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  let [amount, setAmount] = useState();
  let [interest, setInterest] = useState();
  let [year, setYear] = useState();
  let [totalResult, setTotalResult] = useState(0);
  let [totalInterest, setTotalInterest] = useState(0);

  const SimpleCalc = () => {
    let tempInterest = (amount * interest * year) / 100;
    let tempResult = tempInterest + Number(amount);
    setTotalResult(tempResult);
    setTotalInterest(tempInterest);
  };

  const Reset = () => {
    form.reset();
  };

  return (
    <form id="form">
      <div className="row">
        <div className="col-12 col-md">
          <div className="mt-3">
            <label for="amount" className="form-label">
              Amount
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              className="form-control"
              id="amount"
              min={1}
            />
          </div>
          <div className="mt-3">
            <label for="year" className="form-label">
              Year
            </label>
            <input
              onChange={(e) => setYear(e.target.value)}
              type="text"
              className="form-control"
              id="year"
              placeholder="0-20"
              min={0}
              max={20}
            />
          </div>
          <div className="mt-3">
            <label for="interest" className="form-label">
              Interest
            </label>
            <div className="input-group">
              <span className="input-group-text">%</span>
              <input
                onChange={(e) => setInterest(e.target.value)}
                type="number"
                className="form-control"
                id="interest"
                placeholder="1-40%"
                min={1}
                max={40}
              />
            </div>
          </div>
          <div className="mt-3 text-center text-md-start">
            <div className="btn btn-calc btn-dark me-4" onClick={SimpleCalc}>
              Calculate
            </div>
            <div className="btn btn-reset btn-dark " onClick={Reset}>
              Reset
            </div>
          </div>
        </div>
        <div className="col-12 col-md">
          <div className="mt-3 box rounded-3 shadow-sm ">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <p className="mt-5 text-desc">Your Total Investment</p>
              <h1 className=" text-result fw-bold">₹{totalResult}</h1>
              <p className=" text-desc">Your Total Interest</p>
              <h1 className="mb-5 text-result fw-bold">₹{totalInterest}</h1>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Hero;
