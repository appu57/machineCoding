import { useState, useEffect } from "react";
import "./styles.css";
export default function App() {
  const [customers, setCustomers] = useState(0);
  const [billingCounter, setBillingCounters] = useState([[], [], []]);
  const handleCheckOut = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    let maxInLine = 1e9;
    let lineWithLeast;
    for (let line of billingCounter) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0); //sum of array if want use directly the size
      if (totalInLine < maxInLine) {
        lineWithLeast = line;
        maxInLine = totalInLine;
      }
    }
    // lineWithLeast.push(customers);

    setBillingCounters((prev) =>
      prev.map((line) => (line === lineWithLeast ? [...line, customers] : line))
    );
  };
  useEffect(() => {
    console.log(billingCounter);
    let interval = setInterval(() => {
      setBillingCounters((prev) => {
        return prev?.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((value) => value >= 0)
        );
      });
    }, 500);
    return () => clearInterval(interval);
  }, [billingCounter]);

  return (
    <div className="App">
      <div className="button__container">
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="customers"
            value={customers}
            onChange={(e) => {
              setCustomers(e.target.valueAsNumber);
            }}
          />
          <button type="submit">Checkout</button>
        </form>
        <div className="queue__container">
          {billingCounter.map((queue, index) => (
            <div className="queue" key={index}>
              {queue?.map((item, index) => (
                <div className="item">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

