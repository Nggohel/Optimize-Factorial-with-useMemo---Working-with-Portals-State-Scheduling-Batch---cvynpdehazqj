import { useState } from "react";
import FactorialComponent from "../components/FactorialComponent";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0; // Ensure a valid integer value
    setInputValue(value);
  };

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <section>
        <h2>Factorial Calculation</h2>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <FactorialComponent number={inputValue} />
      </section>
    </div>
  );
}
