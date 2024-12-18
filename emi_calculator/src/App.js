import { useEffect, useState } from "react";
import "./App.css";
import { tenureData } from "./utils/constants";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downpayment, setDownpayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (dp) => {
    if(!cost) return

    const loanAmt = cost - dp
    const rate = interest / 100
    const numberOfYears = tenure / 12

    const emi = (loanAmt * rate * (1 + rate)**numberOfYears) / ((1+rate)**numberOfYears - 1)
    return Number(emi/12).toFixed(0)
  }

  const calculateDP = (emi) => {
    if(!cost) return
    const downpaymentPercentage = 100 - (emi / calculateEMI(0)) *100;
    return Number((downpaymentPercentage/100) * cost).toFixed(0)
  }

  useEffect(() => {
    if(!cost) {
      setDownpayment(0)
      setEmi(0)
    }

    const emi = calculateEMI(downpayment)
    setEmi(emi)
  },[tenure])

  const updateEMI = (e) => {
    if(!cost) return
    const dp = Number(e.target.value)
    setDownpayment(dp.toFixed(0))
    
    // Calculate emi and update it
    const emi = calculateEMI(dp)
    setEmi(emi)
  }

  const updateDownpayment = (e) => {
    if(!cost) return
    const emi = Number(e.target.value)
    setEmi(emi.toFixed(0))
    
    // Calculate DP and update it
    const dp = calculateDP(emi)
    setDownpayment(dp)
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

      <label className="font-semibold">Tenure</label>
      <div className="flex justify-between w-[30%]">
        {tenureData.map((t, i) => {
          return <button className={`px-8 py-4 rounded-full bg-blue-400 ${t===tenure ? `bg-blue-600 text-white` : ""}`} key={i} onClick={() => setTenure(t)}>{t}</button>
        })}
      </div>
      
      
    </div>
  );
}

export default App;
