import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Dashboard() {

  const navigate = useNavigate();

  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [creditScore, setCreditScore] = useState("");

  const handleLoanTypeChange = (type) => {
    setLoanType(type);

    if (type === "Home Loan") setRate("8.4");
    else if (type === "Car Loan") setRate("9");
    else if (type === "Personal Loan") setRate("11");
    else setRate("");
  };

  const handleAnalyze = async () => {

    const payload = {
      loanType,
      amount: Number(amount),
      income: Number(income),
      expenses: Number(expenses),
      creditScore: Number(creditScore),
      employmentType: "salaried",
      existingLoans: 0,
      interestRate: Number(rate),
      tenure: Number(tenure)
    };

    if (
      !payload.loanType ||
      !payload.amount ||
      !payload.income ||
      !payload.expenses ||
      !payload.tenure ||
      !payload.creditScore
    ) {
      alert("Fill all fields properly");
      return;
    }

    try {
      const res = await API.post("/loan", payload);
      navigate("/result", { state: res.data });

    } catch (err) {
      alert("Error connecting backend");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-28 px-6">

      <h1 className="text-4xl text-center mb-10">Loan Dashboard</h1>

      {/* 🔥 TWO COLUMN LAYOUT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="bg-white/10 p-6 rounded-xl">

          <select
            value={loanType}
            onChange={(e) => handleLoanTypeChange(e.target.value)}
            className="p-3 w-full mb-4 bg-[#1e293b]"
          >
            <option value="">Select Loan Type</option>
            <option>Home Loan</option>
            <option>Car Loan</option>
            <option>Personal Loan</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 w-full mb-3 bg-white/20"
          />

          <input
            type="number"
            placeholder="Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="p-3 w-full mb-3 bg-white/20"
          />

          <input
            type="number"
            placeholder="Expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="p-3 w-full mb-3 bg-white/20"
          />

          <input
            type="text"
            value={rate ? `${rate}%` : "Auto interest rate"}
            readOnly
            className="p-3 w-full mb-3 bg-[#1e293b]"
          />

          <input
            type="number"
            placeholder="Tenure (years)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="p-3 w-full mb-3 bg-white/20"
          />

          <input
            type="number"
            placeholder="Credit Score"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            className="p-3 w-full mb-4 bg-white/20"
          />

          <button
            onClick={handleAnalyze}
            className="bg-indigo-500 px-6 py-3 rounded-lg w-full hover:bg-indigo-600"
          >
            Analyze
          </button>

        </div>

        {/* RIGHT - TIPS */}
        <div className="flex flex-col gap-6">

          {/* CREDIT SCORE */}
          <div className="bg-white/10 p-5 rounded-xl">
            <h3 className="text-lg text-indigo-400 mb-2">Credit Score Guide</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✔ 750+ → Excellent (Best interest rates)</li>
              <li>✔ 700–749 → Good</li>
              <li>✔ 650–699 → Average</li>
              <li>❌ Below 650 → Risky</li>
            </ul>
          </div>

          {/* EMI RULE */}
          <div className="bg-white/10 p-5 rounded-xl">
            <h3 className="text-lg text-indigo-400 mb-2">EMI Rule</h3>
            <p className="text-sm text-gray-300">
              Keep EMI below <b>40% of your income</b> to avoid financial stress.
            </p>
          </div>

          {/* TENURE TIP */}
          <div className="bg-white/10 p-5 rounded-xl">
            <h3 className="text-lg text-indigo-400 mb-2">Tenure Insight</h3>
            <p className="text-sm text-gray-300">
              Short tenure → Less interest <br />
              Long tenure → Lower EMI but higher total cost
            </p>
          </div>

          {/* SMART TIP */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-xl">
            <h3 className="text-lg font-semibold mb-1">Smart Tip</h3>
            <p className="text-sm">
              Even a 1% lower interest rate can save thousands. Always compare loans.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}