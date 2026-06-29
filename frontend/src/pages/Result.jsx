import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function Result() {

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-indigo-500 px-4 py-2 rounded"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  const amount = Number(state.amount || 0);
  const income = Number(state.income || 0);
  const expenses = Number(state.expenses || 0);
  const emi = Number(state.emi || 0);
  const rate = Number(state.interestRate || 0);
  const tenure = Number(state.tenure || 0);

  // 🔥 COLORS BASED ON STATUS
  const statusColor =
    state.status === "Eligible" ? "text-green-400" :
    state.status === "Risky" ? "text-red-400" :
    "text-yellow-400";

  // 🔥 INSIGHTS
  const emiRatio = income ? ((emi / income) * 100).toFixed(1) : 0;

  let insight = "";
  if (emiRatio < 30) insight = "Very safe loan 👍";
  else if (emiRatio < 50) insight = "Manageable loan ⚠️";
  else insight = "High financial risk ❌";

  const barData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
    { name: "EMI", value: emi }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-28 px-6">

      <h1 className="text-5xl text-center mb-10 font-bold">
        Loan Analysis Result
      </h1>

      {/* 🔥 TOP CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 p-6 rounded-xl text-center">
          <p className="text-gray-400">EMI</p>
          <h2 className="text-2xl font-bold">₹ {emi}</h2>
        </div>

        <div className="bg-white/10 p-6 rounded-xl text-center">
          <p className="text-gray-400">Status</p>
          <h2 className={`text-2xl font-bold ${statusColor}`}>
            {state.status}
          </h2>
        </div>

        <div className="bg-white/10 p-6 rounded-xl text-center">
          <p className="text-gray-400">EMI / Income</p>
          <h2 className="text-2xl font-bold">{emiRatio}%</h2>
        </div>

      </div>

      {/* 🔥 DETAILS */}
      <div className="max-w-6xl mx-auto bg-white/10 p-6 rounded-xl mb-10 grid grid-cols-2 gap-4">

        <p><b>Loan Type:</b> {state.loanType}</p>
        <p><b>Loan Amount:</b> ₹ {amount}</p>

        <p><b>Income:</b> ₹ {income}</p>
        <p><b>Expenses:</b> ₹ {expenses}</p>

        <p><b>Interest Rate:</b> {rate}%</p>
        <p><b>Tenure:</b> {tenure} years</p>

      </div>

      {/* 🔥 INSIGHT BOX */}
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl mb-10">
        <h3 className="text-xl font-semibold mb-2">Smart Insight</h3>
        <p>{insight}</p>
      </div>

      {/* 🔥 BIG BAR CHART */}
      <div className="max-w-6xl mx-auto bg-white/10 p-6 rounded-xl">

        <h3 className="text-center mb-6 text-xl">
          Financial Comparison
        </h3>

        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" stroke="#fff" />
              <YAxis
  stroke="#fff"
  width={80}
  tickFormatter={(value) => {
    if (value >= 10000000) return (value / 10000000) + "Cr";
    if (value >= 100000) return (value / 100000) + "L";
    if (value >= 1000) return (value / 1000) + "K";
    return value;
  }}
/>

           <Tooltip formatter={(value) => `₹ ${value}`} />

              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}