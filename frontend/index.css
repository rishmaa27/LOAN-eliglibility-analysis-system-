import { useState, useEffect } from "react";

export default function EMI({ amount }) {
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(2);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    if (!amount) return;

    const P = amount;
    const r = rate / 12 / 100;
    const n = years * 12;

    const emiVal =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(Math.round(emiVal));
  }, [amount, rate, years]);

  return (
    <div className="mt-4 border-t pt-3">

      <p className="font-semibold">
        Loan Amount: ₹{amount}
      </p>

      <div className="flex gap-2 mt-2">

        <select
          onChange={(e) => setRate(Number(e.target.value))}
          className="border p-2 rounded"
        >
          <option value="8">8%</option>
          <option value="10">10%</option>
          <option value="12">12%</option>
        </select>

        <select
          onChange={(e) => setYears(Number(e.target.value))}
          className="border p-2 rounded"
        >
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="5">5 Years</option>
        </select>

      </div>

      <p className="mt-2 font-bold text-blue-600">
        EMI: ₹{emi}/month
      </p>

    </div>
  );
}