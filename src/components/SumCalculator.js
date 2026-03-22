import React, { useState, useEffect } from "react";
import "./SumCalculator.css"

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Add number on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input !== "") {
      const value = parseInt(input, 10);
      if (!isNaN(value)) {
        setNumbers((prev) => [...prev, value]);
      }
      setInput("");
    }
  };

  // Async sum calculation
  useEffect(() => {
    setInput(input)
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0); // async without blocking UI

    return () => clearTimeout(timer);
  }, [numbers, input]);

  return (
    <div className="container">
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter number & press Enter"
      />

      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;