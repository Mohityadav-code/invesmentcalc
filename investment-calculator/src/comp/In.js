import React, { useState } from 'react';

function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(10);
  const [yearlyIncrease, setYearlyIncrease] = useState(20);

  const calculateFutureValue = () => {
    let total = 0;
    let yearlyInvestment = initialInvestment;
    for (let i = 0; i < years; i++) {
      total += yearlyInvestment * Math.pow(1 + interestRate / 100, years - i);
      yearlyInvestment *= 1 + yearlyIncrease / 100;
    }
    return total;
  };

  return (
    <div>
      <label>
        Initial Investment: ${initialInvestment}
        <input
          type="range"
          min="0"
          max="100000"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </label>
      <label>
        Interest Rate: {interestRate}%
        <input
          type="range"
          min="0"
          max="20"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </label>
      <label>
        Years: {years}
        <input
          type="range"
          min="1"
          max="50"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>
      <label>
        Yearly Increase in Investment: {yearlyIncrease}%
        <input
          type="range"
          min="0"
          max="100"
          value={yearlyIncrease}
          onChange={(e) => setYearlyIncrease(Number(e.target.value))}
        />
      </label>
      <p>
        Future Value: ${calculateFutureValue().toFixed(2)}
      </p>
    </div>
  );
}

export default InvestmentCalculator;
