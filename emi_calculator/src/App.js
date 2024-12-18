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

  const calculateEMI = () => {

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
      <div className="w-full">
         <input className="w-full" id="downpayment" type="range" min={0} max={cost} value={downpayment} onChange={updateEMI}/>
         <div className="flex justify-between">
          <label>0%</label>
          <b>{downpayment}</b>
          <label>100%</label>
         </div>
      </div>

      <label htmlFor="emi" className="font-semibold">
        Loan per month
      </label>
      <div className="w-full">
       <input className="w-full" id="em" type="range" min={calculateEMI(cost)} max={calculateEMI(0)} value={emi} onChange={updateDownpayment}/>
       <div className="flex justify-between">
          <label>{calculateEMI(cost)}</label>
          <b>{emi}</b>
          <label>{calculateEMI(0)}</label>
         </div>
      </div>
      
    </div>
  );
}

export default App;
