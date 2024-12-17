import { useState } from "react";
import "./App.css";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downpayment, setDownpayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {
    
  }

  const updateDownpayment = () => {
    
  }

  return (
    <div className="w-11/12 px-4 flex flex-col gap-5">
      <h2 className="font-bold text-[25px]">EMI Calculator </h2>

      <label htmlFor="cost" className="font-semibold">
        Total cost of assets
      </label>
      <input
        id="cost"
        className="p-2 rounded-md border-2"
        placeholder="Total cost of assets"
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <label htmlFor="interest" className="font-semibold">
        Interest Rate (in %)
      </label>
      <input
        id="interest"
        className="p-2 rounded-md border-2"
        placeholder="Interest Rate (in %)"
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />

      <label htmlFor="fee" className="font-semibold">
        Processing Fee (in %)
      </label>
      <input
        id="fee"
        className="p-2 rounded-md border-2"
        placeholder="Processing Fee (in %)"
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <label htmlFor="downpayment" className="font-semibold">
        Down Payment
      </label>
      <input id="downpayment" type="range" min={0} max={cost} value={downpayment} onChange={updateEMI}/>

      <label htmlFor="emi" className="font-semibold">
        Loan per month
      </label>
      <input id="em" type="range" min={0} max={cost} value={emi} onChange={updateDownpayment}/>
    </div>
  );
}

export default App;
