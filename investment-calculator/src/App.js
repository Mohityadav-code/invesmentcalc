import React, { useState } from 'react';
import "./App.css"
import InvestmentCalculator from './comp/In';

function App() {
  const [principal, setPrincipal] = useState(3000);
  const [rate, setRate] = useState(15);
  const [compounds, setCompounds] = useState(12);
  const [years, setYears] = useState(20);

  const calculateFutureValue = () => {
    const r = rate / 100;
    const futureValue = principal * (((1 + r/compounds)**(compounds*years) - 1) / (r/compounds));
    return futureValue.toFixed(2);
  };

  return (
    <InvestmentCalculator/>
  );
}

export default App;
