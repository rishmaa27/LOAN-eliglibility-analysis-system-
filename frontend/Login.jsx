import { useState } from "react";
import { motion } from "framer-motion";

export default function Compare() {

  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");

  const floatAnim = {
    animate: { y: [0, -6, 0] },
    transition: { repeat: Infinity, duration: 3 }
  };

  // BANK DATA
  const banks = [
    { name: "SBI", rate: 8.4 },
    { name: "HDFC", rate: 8.6 },
    { name: "ICICI", rate: 8.8 }
  ];

  // EMI CALCULATION FUNCTION
  const calculateEMI = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    const months = N * 12;

    return (
      (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    ).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-28 font-['Sora']">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-12">
        Compare Loan Options
      </h1>

      {/* INPUT SECTION */}
      <div className="max-w-4xl mx-auto mb-12">

        <motion.div {...floatAnim}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl">

          <h2 className="text-2xl mb-6 text-center">
            Enter Details to Compare
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* LOAN TYPE */}
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="p-3 rounded-lg bg-[#1e293b] text-white col-span-2"
            >
              <option value="">Select Loan Type</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>

            {/* AMOUNT */}
            <input
              type="number"
              placeholder="Loan Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-3 rounded-lg bg-white/20"
            />

            {/* TENURE */}
            <input
              type="number"
              placeholder="Tenure (Years)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="p-3 rounded-lg bg-white/20"
            />

          </div>

        </motion.div>

      </div>

      {/* RESULT TABLE */}
      {amount && tenure && loanType && (
        <div className="max-w-6xl mx-auto">

          <motion.div {...floatAnim}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl">

            <table className="w-full text-center">

              <thead className="text-lg text-gray-300 border-b border-white/20">
                <tr>
                  <th className="py-4">Bank</th>
                  <th>Interest Rate</th>
                  <th>EMI</th>
                </tr>
              </thead>

              <tbody>

                {banks.map((bank, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/10">

                    <td className="py-4 text-indigo-400 font-semibold">
                      {bank.name}
                    </td>

                    <td>{bank.rate}%</td>

                    <td className="text-green-400 font-semibold">
                      ₹ {calculateEMI(amount, bank.rate, tenure)}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </motion.div>

        </div>
      )}

    </div>
  );
}