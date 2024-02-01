import { useState } from "react";
import "./index.css";
const message = ["learn react", "apply for job", "invest your income"];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "apoorva" });
  const [isOpen, setIsOpen] = useState(true);

  function next() {
    if (step > 1) setStep(step - 1);
  }

  function handel() {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1); // Use functional update to ensure order
      // if (test) setTest({ name: "" });
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active  " : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{message[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={next}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handel}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
